import React from 'react';

import Link from 'next/link';
import {useSession, signIn,signOut} from 'next-auth/react'

import config from '../config/index.json';


const MainHero = () => {
  const {data:session} = useSession()
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{' '}
          <span className={`block text-primary xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3 md:w-1/2 sm:w-full sm:flex sm:justify-center lg:justify-start">
            {!session && <div onClick={()=>signIn('github',{callbackUrl: `${window.location.origin}/creation/1`})} className='flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-5 cursor-pointer'>{mainHero.secondaryAction.text}</div>}
            {session &&
            <Link
              href={mainHero.secondaryAction.href}
            >
              <div className='flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-5 cursor-pointer'>

                {mainHero.secondaryAction.text}
              </div>
            </Link>
            }
            {session &&
            <div onClick={()=>signOut()} className='flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-5 cursor-pointer'>Signout</div>
            }
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
