import { cn } from "@/lib/utils";
import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { MoveUpRight, Award, BadgeCheck, Calendar } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Certification {
    title: string;
    issuer: string;
    year: string;
    link?: string;
    icon?: React.ReactNode;
}

const CERTIFICATIONS: Certification[] = [
    {
        title: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft",
        year: "2023",
    },
    {
        title: "MongoDB Certified Associate Developer",
        issuer: "MongoDB",
        year: "2023",
    },
    {
        title: "Salesforce AI Associate",
        issuer: "Salesforce",
        year: "2023",
    },
    {
        title: "Automation Anywhere Certified Essentials RPA Professional",
        issuer: "Automation Anywhere",
        year: "2023",
    },
    {
        title: "Linguaskill CAMBRIDGE – English (B1 Level)",
        issuer: "Cambridge Assessment English",
        year: "2023",
    },
];

const CertificationsSection = () => {
    return (
        <SectionWrapper id="certifications" className="py-24">
            <div className="flex flex-col gap-12">
                <h2 className="text-4xl font-bold text-center">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CERTIFICATIONS.map((cert, index) => (
                        <Card key={index} className="bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors duration-300">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg">
                                        <BadgeCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    {cert.year && (
                                        <div className="flex items-center gap-1 text-xs text-slate-500 font-mono">
                                            <Calendar className="w-3 h-3" />
                                            <span>{cert.year}</span>
                                        </div>
                                    )}
                                </div>
                                <CardTitle className="text-lg font-bold mt-4 leading-tight">{cert.title}</CardTitle>
                                <CardDescription className="text-base font-medium text-slate-700 dark:text-slate-300">
                                    {cert.issuer}
                                </CardDescription>
                            </CardHeader>
                            {/* <CardFooter>
                                <Button variant="ghost" size="sm" className="w-full justify-between group">
                                    View Certificate
                                    <MoveUpRight className="w-4 h-4 text-slate-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                                </Button>
                            </CardFooter> */}
                        </Card>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default CertificationsSection;
