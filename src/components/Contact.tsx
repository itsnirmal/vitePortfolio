'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from 'lucide-react'
import emailjs from 'emailjs-com'

const Contact = () => {

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        emailjs
            .sendForm(
                'service_6f4amt3', 
                'template_b9ov7gr', 
                event.currentTarget,
                '4gT4W6q3HaJ8L1Z0s' 
            )
            .then(
                (result) => {
                    console.log(result);
                    alert('Message sent successfully!');
                },
                (error) => {
                    console.log(error);
                    alert('Failed to send message.');
                }
            );
    };
    return (
        <div className="flex flex-col bg-background text-foreground">
            <section id="contact" className="py-20 bg-muted">
                <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
                <div className="max-w-md mx-auto">
                    <Card>
                    <CardContent className="pt-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Input name="name" placeholder="Your Name" className="bg-background" />
                            </div>
                            <div className="space-y-2">
                                <Input name="email" type="email" placeholder="Your Email" className="bg-background" />
                            </div>
                            <div className="space-y-2">
                                <Textarea name="message" placeholder="Your Message" className="bg-background" />
                            </div>
                            <Button type="submit" className="w-full transition-transform transform hover:scale-105 dark:bg-red-900 dark:text-white">Send Message</Button>
                        </form>
                    </CardContent>
                    </Card>
                </div>
                <div className="mt-12 flex justify-center space-x-6">
                    {/* GitHub Link */}
                    <a href="https://github.com/itsnirmal" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </Button>
                    </a>

                    {/* LinkedIn Link */}
                    <a href="https://linkedin.com/in/nirmal-gautam/" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Button>
                    </a>

                    {/* Email Link */}
                    <a href="mailto:nirmalg626@gmail.com">
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Mail className="h-6 w-6" />
                            <span className="sr-only">Email</span>
                        </Button>
                    </a>
                </div>

                </div>
            </section>
        </div>
    )
}

export default Contact