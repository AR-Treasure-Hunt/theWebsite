export default function SponsorsSection() {
  return (
    <section className="w-full  rounded-xl py-12 mb-8">
      
      <div className="container px-4 mx-auto">
        <h2 className="text-center text-5xl text-white mb-8">Meet Our Amazing Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {/* In Association with */}
            <div className="border border-dashed bg-background border-black rounded-lg p-4">
              <h3 className="text-center text-xl font-medium text-black mb-4">In Association with:</h3>
              <div className="grid gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <img
                    src="/sponsors/leapfrog.png"
                    alt="Leapfrog"
                    width={120}
                    height={40}
                    className="w-full object-contain"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <img
                    src="/sponsors/bhoos.png"
                    alt="BHOOS"
                    width={120}
                    height={40}
                    className="w-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Powered by */}
            <div className="border bg-background border-dashed border-black rounded-lg p-4">
              <h3 className="text-center text-xl font-medium text-black mb-4">Powered By:</h3>
               <div className="bg-white p-4 rounded-lg">
                <img
                  src="/sponsors/baato.png"
                  alt="Baato"
                  width={120}
                  height={40}
                 className="w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-4">
            {/* Beverage Partner */}
            <div className="border bg-background border-dashed border-black rounded-lg p-4">
              <h3 className="text-center text-xl font-medium text-black mb-4">Beverage Partner:</h3>
              <div className="bg-white p-4 rounded-lg">
                <img
                  src="/sponsors/beverage.png"
                  alt="Beverage Partner"
                  width={120}
                  height={40}
                  className="w-full object-contain"
                />
              </div>
            </div>

            {/* Placement Partner */}
            <div className="border bg-background border-dashed border-black rounded-lg p-4">
              <h3 className="text-center text-xl font-medium text-black mb-4">Placement Partner:</h3>
              <div className="bg-white p-4 rounded-lg">
                <img
                  src="/sponsors/internsathi.png"
                  alt="InternSathi"
                  width={120}
                  height={40}
                  className="w-full object-contain"
                />
              </div>
            </div>

            {/* Safety Partner */}
            <div className="border bg-background border-dashed border-black rounded-lg p-4">
              <h3 className="text-center text-xl font-medium text-black mb-4">Safety Partner:</h3>
              <div className="bg-white p-4 rounded-lg">
                <img
                  src="/sponsors/medilife.png"
                  alt="MediLife"
                  width={120}
                  height={40}
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Gift Partner */}
            <div className="border bg-background border-dashed border-black rounded-lg p-4">
              <h3 className="text-center text-xl font-medium text-black mb-4">Gift Partner:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg col-span-2">
                  <img
                    src="/sponsors/image 69.png"
                    alt="Gift Partner 1"
                    width={120}
                    height={40}
                    className="w-full object-contain"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <img
                      src="/sponsors/image 70.png"
                    alt="Gift Partner 2"
                    width={120}
                    height={40}
                    className="w-full object-contain"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <img
                       src="/sponsors/image 71.png"
                    alt="Gift Partner 3"
                    width={120}
                    height={40}
                      className="w-full object-contain"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <img
                       src="/sponsors/image 72.png"
                    alt="Gift Partner 3"
                    width={120}
                    height={40}
                      className="w-full object-contain"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <img
                       src="/sponsors/image 73.png"
                    alt="Gift Partner 3"
                    width={120}
                    height={40}
                      className="w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

