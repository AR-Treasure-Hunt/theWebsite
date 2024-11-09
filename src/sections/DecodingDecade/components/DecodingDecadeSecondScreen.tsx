import React, { useEffect, useState } from 'react';
import { Image, Download, Loader } from 'lucide-react';
import confetti from "canvas-confetti";

interface ApiResponse {
  detail?: string;
  message?: string;
}

const DecodingDecadeSecondScreen = () => {
  useEffect(() => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
 
    const frame = () => {
      if (Date.now() > end) return;
 
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
 
      requestAnimationFrame(frame);
    };
 
    frame();
  }, [])
  // State
  const [teamName, setTeamName] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const API_BASE_URL = 'https://factorfive.vercel.app';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setError(null);
    setImageBlob(null);
    
    // Validate input
    if (!teamName.trim()) {
      setError('Please enter a team name');
      return;
    }

    setIsPending(true);
    setIsImageLoading(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/picture?teamName=${encodeURIComponent(teamName.trim())}`,
        {
          method: 'GET',
        }
      );

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Too many attempts. Please wait a minute and try again.');
        }
        
        const errorData: ApiResponse = await response.json();
        throw new Error(errorData.detail || 'Failed to get image');
      }

      // Check if response is JSON (error) or blob (image)
      const contentType = response.headers.get('content-type');
      if (contentType?.includes('application/json')) {
        const errorData: ApiResponse = await response.json();
        throw new Error(errorData.message || 'Invalid team name');
      }

      // Handle successful image response
      const blob = await response.blob();
      
      setImageBlob(blob);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsPending(false);
      setIsImageLoading(false);
    }
  };

  const handleDownload = () => {
    if (imageBlob) {
      const url = window.URL.createObjectURL(imageBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `factorfive-${teamName.trim()}.jpg`; // Use team name in file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="space-y-6">
        <p className="text-center text-[28px] text-lime-500">
          Congratulations! You've solved the clue!
        </p>
        
        <p className="text-left text-[28px] text-gray-600">
          Enter your team name to get your achievement image:
        </p>

        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col space-y-4"
          noValidate
        >
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Enter your team name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              disabled={isPending}
              className={`
                text-[28px] px-4 py-2 border rounded-md w-full
                focus:outline-none focus:ring-2 focus:ring-blue-500
                disabled:opacity-50 disabled:cursor-not-allowed
                ${error ? 'border-red-500' : 'border-gray-300'}
              `}
            />
            
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending || !teamName.trim()}
            className={`
              text-[18px] bg-[#004B6E] text-white py-2 rounded-md font-medium
              transition-all duration-200
              ${isPending || !teamName.trim() 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-[#003855] active:transform active:scale-95'}
            `}
          >
            {isPending ? (
              <span className="flex items-center justify-center">
                <Loader className="animate-spin -ml-1 mr-3 h-5 w-5" />
                Generating Image...
              </span>
            ) : (
              'Generate Image'
            )}
          </button>
        </form>

        {imageBlob && (
          <div className="space-y-4 animate-fade-in">
            <div className="relative rounded-lg overflow-hidden border border-gray-200">
              <img
                src={URL.createObjectURL(imageBlob)}
                alt="Achievement Image"
                className="w-full h-auto"
              />
            </div>

            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center space-x-2 text-[18px] bg-green-600 text-white py-2 px-4 rounded-md font-medium hover:bg-green-700 transition-colors"
            >
              <Download className="h-5 w-5" />
              <span>Download Image</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DecodingDecadeSecondScreen;