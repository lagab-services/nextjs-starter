"use client";
import React, {useState} from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";
import {AddressType} from "@/app/(dashboard)/customer/_components/address-field";
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const CustomerForm = () => {
    const [address, setAddress] = useState<AddressType>({
        address1: "",
        address2: "",
        formattedAddress: "",
        city: "",
        region: "",
        postalCode: "",
        country: "",
        lat: 0,
        lng: 0,
    });
    const [searchInput, setSearchInput] = useState("");

    const addressSchema = z.object({
        address1: z.string().min(1, "Address line 1 is required"),
        address2: z.string().optional(),
        city: z.string().min(1, "City is required"),
        postalCode: z.string().min(1, "Postal code is required"),
    });

    const {
        control,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(addressSchema),
        defaultValues: {
            address1: address.address1 || "",
            address2: address.address2 || "",
            city: address.city || "",
            postalCode: address.postalCode || "",
        },
    });

    /**
     * Handle form submission and save the address
     */
    const onSubmit = (data: any) => {
        const newFormattedAddress = updateAndFormatAddress(adrAddress, {
            "street-address": data.address1,
            address2: data.address2,
            locality: data.city,
            region: "",
            "postal-code": data.postalCode,
        });

        setAddress({
            ...address,
            ...data,
            formattedAddress: newFormattedAddress,
        });
        setOpen(false);
    };

    /**
     * Update and format the address string with the given components
     */
    const updateAndFormatAddress = (
        addressString: string,
        addressComponents: {
            "street-address": string;
            address2: string;
            locality: string;
            region: string;
            "postal-code": string;
        }
    ) => {
        let updatedAddressString = addressString;
        Object.entries(addressComponents).forEach(([key, value]) => {
            if (key !== "address2") {
                const regex = new RegExp(`(<span class=\"${key}\">)[^<]*(</span>)`, "g");
                updatedAddressString = updatedAddressString.replace(regex, `$1${value}$2`);
            }
        });

        updatedAddressString = updatedAddressString.replace(/<\/?span[^>]*>/g, "");

        if (addressComponents.address2) {
            const address1Regex = new RegExp(`${addressComponents["street-address"]}`);
            updatedAddressString = updatedAddressString.replace(
                address1Regex,
                `${addressComponents["street-address"]}, ${addressComponents.address2}`
            );
        }

        updatedAddressString = updatedAddressString
            .replace(/,\s*,/g, ",")
            .trim()
            .replace(/\s\s+/g, " ")
            .replace(/,\s*$/, "");

        return updatedAddressString;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4 ">
                <Card className="border-none shadow-none">
                    <CardHeader><h4>Informations Générales</h4></CardHeader>
                    <CardContent className="space-y-4 grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="">
                                <Label>Label</Label>
                                <Input type="text"/>
                            </div>
                            <div className="">
                                <Label>Label</Label>
                                <Input type="text"/>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="">
                                <Label>Nom, Raison Sociale</Label>
                                <Input type="text"/>
                            </div>
                            <div className="">
                                <Label>Siret</Label>
                                <Input type="text"/>
                            </div>
                        </div>
                        <Card className="p-0 border-none shadow-none">
                            <CardHeader className="px-0"><h4>Contact (Optionnel)</h4></CardHeader>
                            <CardContent className="px-0 grid gap-4">
                                <div className="">
                                    <Input type="email" placeholder="Email"/>
                                </div>
                                <div className="">
                                    <Input type="phone" placeholder="Téléphone"/>
                                </div>
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>
                <div>
                    <Card className="p-0 border-none shadow-none">
                        <CardHeader><h4>Adresse</h4></CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="space-y-0.5">
                                <Label htmlFor="address1">Address line 1</Label>
                                <Controller
                                    name="address1"
                                    control={control}
                                    render={({field}) => (
                                        <Input {...field} id="address1" placeholder="Address line 1"/>
                                    )}
                                />
                                {errors.address1 && (
                                    <p className="text-sm text-red-600">{errors.address1.message}</p>
                                )}
                            </div>

                            <div className="space-y-0.5">
                                <Label htmlFor="address2">
                                    Address line 2{" "}
                                    <span className="text-xs text-secondary-foreground">
										(Optional)
									</span>
                                </Label>
                                <Controller
                                    name="address2"
                                    control={control}
                                    render={({field}) => (
                                        <Input {...field} id="address2" placeholder="Address line 2"/>
                                    )}
                                />
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1 space-y-0.5">
                                    <Label htmlFor="city">City</Label>
                                    <Controller
                                        name="city"
                                        control={control}
                                        render={({field}) => (
                                            <Input {...field} id="city" placeholder="City"/>
                                        )}
                                    />
                                    {errors.city && (
                                        <p className="text-sm text-red-600">{errors.city.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1 space-y-0.5">
                                    <Label htmlFor="postalCode">Postal Code</Label>
                                    <Controller
                                        name="postalCode"
                                        control={control}
                                        render={({field}) => (
                                            <Input {...field} id="postalCode" placeholder="Postal Code"/>
                                        )}
                                    />
                                    {errors.postalCode && (
                                        <p className="text-sm text-red-600">{errors.postalCode.message}</p>
                                    )}
                                </div>
                                <div className="flex-1 space-y-0.5">
                                    <Label htmlFor="country">Country</Label>
                                    <Controller
                                        name="country"
                                        control={control}
                                        render={({field}) => (
                                            <Input {...field} id="country" placeholder="Country"/>
                                        )}
                                    />
                                    {errors.country && (
                                        <p className="text-sm text-red-600">{errors.country.message}</p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className=" border-none shadow-none">
                        <CardHeader><h4>Informations complémentaires (Optionnel)</h4></CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="">
                                <Textarea placeholder="Ajouter des informations" rows="4"/>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </form>
    );
};

export default CustomerForm;
