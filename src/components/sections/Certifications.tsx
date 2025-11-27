import React from 'react';
import awsCcp from '@/assets/aws_ccp.png';
import securityPlus from '@/assets/security_plus.png';
import projectPlus from '@/assets/project_plus.png';
import aPlus from '@/assets/a_plus.png';
import itil4 from '@/assets/itil_4.png';


const certifications = [
    { name: 'AWS Cloud Practicioner', image: awsCcp },
    { name: 'CompTIA Security+', image: securityPlus },
    { name: 'CompTIA Project+', image: projectPlus },
    { name: 'CompTIA A+', image: aPlus },
    { name: 'ITIL 4 Foundation', image: itil4 },
];

const Certifications: React.FC = () => {
    return (
        <section className="py-7 space-y-5">
            <h2 className="text-3xl font-bold text-center">Certifications</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
                {certifications.map((cert) => (
                    <div key={cert.name} className="group relative h-32 w-32 flex items-center justify-center transition-transform hover:scale-110 duration-300">
                        <img
                            src={cert.image}
                            alt={cert.name}
                            className="max-h-full max-w-full object-contain"
                            title={cert.name}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
