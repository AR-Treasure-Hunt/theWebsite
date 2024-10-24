import { useFormContext } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface TeamSectionProps {
    isDisabled: boolean;
}

export function TeamSection({ isDisabled }: TeamSectionProps) {
    const form = useFormContext()
    const teamOption = form.watch("teamOption")

    return (
        <div className="space-y-4">
            <FormField
                control={form.control}
                name="teamOption"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                disabled={isDisabled}
                                className="flex flex-col space-y-2"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="create" id="create" />
                                    <Label htmlFor="create">Create Team</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="join" id="join" />
                                    <Label htmlFor="join">Join Team</Label>
                                </div>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {teamOption && (
                <FormField
                    control={form.control}
                    name="teamName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                {teamOption === "create" ? "Team Name" : "Team Code"}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    disabled={isDisabled}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            )}
        </div>
    )
}