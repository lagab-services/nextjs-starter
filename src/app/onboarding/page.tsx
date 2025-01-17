import {GalleryVerticalEnd} from 'lucide-react';

const OnboardingPage = () => {
    return (
        <div className="flex min-h-svh">
            <div className="relative hidden bg-muted lg:block md:w-2/5">
                <div className="w-full max-w-sm p-6 md:p-10">
                    <a href="#" className="flex items-center gap-2 font-medium">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <GalleryVerticalEnd className="size-4"/>
                        </div>
                        Acme Inc. </a>
                    <h1 className="text-lg font-bold mt-2 ">Title</h1>
                    <p className="mt-2 text-muted-foreground"> This helps us personalize your experience with the most appropriate Athena AI
                        modules. </p>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-10 md:w-3/5">
                <div className="flex justify-center gap-2 md:justify-start">
                    <a href="#" className="flex items-center gap-2 font-medium">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <GalleryVerticalEnd className="size-4"/>
                        </div>
                        Acme Inc. </a>
                </div>
                <div className="flex flex-1">
                    <div className="w-full max-w-xs"><h1 className="text-3xl font-bold">Tell Us About Yourself</h1>
                        <p className="mt-2 text-muted-foreground"> This helps us personalize your experience with the most appropriate Athena AI
                            modules. </p></div>
                </div>
            </div>
        </div>
    );
};

export default OnboardingPage;