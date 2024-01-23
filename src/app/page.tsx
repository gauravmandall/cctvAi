"use client";
import { ModeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FlipHorizontal } from 'lucide-react';
import React, { useRef } from 'react'
import Webcam from 'react-webcam';

type Props = {}

const HomePage = (props: Props) => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // state 
  const [mirrored, setMirrored] = React.useState<boolean>(false);
  return (
    <div className='flex h-screen'>
      {/* Left division - webcam and Canvas */}
      <div className='relative'>
        <div className='relative h-screen w-full'>
          <Webcam
            /// <reference path="webcamRef" />
            ref={webcamRef}
            mirrored={mirrored}
            className='h-full w-full object-contain p-2'
          />
          <canvas
            ref={canvasRef}
            className='absolute top-0 left-0 h-full w-full object-contain p-2'
          />
        </div>
      </div>

      {/* Right division - container for buttons and wiki section */}

      <div className='flex flex-row flex-1'>
        <div className='border-primary/5 border-2 max-w-xs flex flex-col gap-2 justify-between shadow-md rounded-md p-4'>

          {/* Top section */}
          <div className='flex flex-col gap-2'>
            <ModeToggle />
            <Button 
            onClick={() => {
              setMirrored((prev)=>!prev);
            }}
            variant={'outline'} 
            size={'icon'}
            >
              <FlipHorizontal />
            </Button>
            <Separator  className='my-2'/>
          </div>

          {/* Middle section */}
          <div className='flex flex-col gap-2'>
            <Separator />

            <Separator />
          </div>
          {/* Bottom section */}
          <div className='flex flex-col gap-2'>
            <Separator />

            <Separator />
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage