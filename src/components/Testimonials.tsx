import { frame8 } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { testimonials } from '@/data/testimonial'

const Testimonials = () => {
    return (
        <div className='bg-orange-50 flex flex-col items-center justify-center py-20 -px-40'>
            <div className='text-center'>
                <h1 className='relative z-10 font-source font-bold text-colors-BlueGray text-xl md:text-5xl'>
                    What our users think <span className='italic text-colors-ButtonOrange font-geist'>about us </span>
                </h1>
                <p className='text-xs md:text-sm font-source text-colors-BlueGray py-2 font'>
                    Learn about what our users say about our services
                </p>
            </div>

            <div className='flex items-center justify-center px-0 gap-10'>
                <Image
                    src={frame8}
                    alt='globe'
                    className='left-0'
                />
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-2xl mx-auto overflow-x-hidden"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="basis-1/2">
                                <div className="p-1">
                                    <Card className={`${testimonial.color} transition-colors duration-300 hover:shadow-lg`}>
                                        <CardContent className="flex flex-col items-center justify-center px-6 py-10 font-source text-left">
                                            <p className="text-sm text-left italic text-colors-BlueGray">"{testimonial.quote}"</p>
                                            <div className='flex items-center gap-3 py-2'>
                                                <Image
                                                    src={testimonial.image || "/placeholder.svg"}
                                                    alt={testimonial.name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />

                                                <div>
                                                    <h3 className="text-base text-colors-BlueGray font-semibold">{testimonial.name}</h3>
                                                    <p className="text-sm text-gray-400 text-muted-foreground">{testimonial.role}</p>
                                                </div>
                                            </div>

                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex mt-4 space-x-2">
                        <CarouselPrevious className="relative left-0 right-0 top-0 translate-y-0 h-8 w-8" />
                        <CarouselNext className="relative left-0 right-0 top-0 translate-y-0 h-8 w-8" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Testimonials
