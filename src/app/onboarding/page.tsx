import {GalleryVerticalEnd} from 'lucide-react';
import {Progress} from '@/components/ui/progress';
import React from "react";
import {Timeline} from '@/components/timeline';

const OnboardingPage = () => {
    return (
        <div className="flex min-h-svh">
            <div className="relative hidden bg-muted dark:bg-slate-900 lg:block md:w-2/5">
                <div className="w-full max-w-sm p-6 md:p-10">
                    <a href="#" className="flex items-center gap-2 font-medium">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <GalleryVerticalEnd className="size-4"/>
                        </div>
                        Acme Inc. </a>
                    <h1 className="text-lg font-bold mt-2 ">Title</h1>
                    <p className="mt-2 text-muted-foreground "> This helps us personalize your experience with the most appropriate Athena AI
                        modules. </p>
                    <Timeline className="mt-10"
                              items={[
                                  {
                                      title: "Event #1",
                                      description: "This is the first event of the timeline."
                                  },
                                  {
                                      title: "Event #2",
                                      description: "This is the second event of the timeline."
                                  },
                                  {
                                      title: "Event #3",
                                      description: "This is the third event of the timeline."
                                  }
                              ]}
                              activeItem={1}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-10 md:w-3/5">
                <div className="flex flex-col justify-center gap-2 md:justify-start">
                    <Progress value={33} className="mb-12 max-w-sm"/>
                    <a href="#" className="flex items-center gap-2 font-medium">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <GalleryVerticalEnd className="size-4"/>
                        </div>
                        Acme Inc. </a>
                </div>
                <div className="flex flex-1">

                    <div className="w-full max-w-lg">

                        <h1 className="text-3xl font-bold">Tell Us About Yourself</h1>
                        <p className="mt-2 text-muted-foreground"> This helps us personalize your experience with the most appropriate Athena AI
                            modules. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnboardingPage;