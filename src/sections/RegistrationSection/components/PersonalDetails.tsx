import { useFormContext } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface PersonalDetailsProps {
    isDisabled: boolean;
}

export function PersonalDetails({ isDisabled }: PersonalDetailsProps) {
    const form = useFormContext()

    return (
        <div className="space-y-4">
            <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                            <Input {...field} disabled={isDisabled} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field} type="email" disabled={isDisabled} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />


            <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                            <Input {...field} disabled={isDisabled} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                            <Input {...field} disabled={isDisabled} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="institution"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Institution</FormLabel>
                        <FormControl>
                            <Input {...field} disabled={isDisabled} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="socialMedia"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Social Media Link</FormLabel>
                        <FormControl>
                            <Input {...field} disabled={isDisabled} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    )
}