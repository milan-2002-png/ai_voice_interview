import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import { getCurrentUser, getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import {
//   getInterviewsByUserId,
//   getLatestInterviews,
// } from "@/lib/actions/general.action";

const page = async () => {
  const user = await getCurrentUser();
  const [userInterviews, latestInterview] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = latestInterview?.length! > 0;
  return (
    <div>Home Page.
      <>
         <section className="card-cta">
          <div className="flex flex-col gap-6 max-w-lg">
                  <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
                  <p className="text-lg">
                        Practice real interview questions & get instant feedback
                  </p>
                  <Button asChild className="btn-primary max-sm:w-full">
                    <Link href="/interview">Start an Interview</Link>

                  </Button>
          </div>

           <Image 
              src="/robot.png"
              alt="robo-dude"
              width={400}
              height={400}
              className="max-sm:hidden"
            />

         </section>

         <section className="flex flex-col gap-6 mt-8">
              <h2>Your Interviews</h2>
              <div className="interviews-section">
            {hasPastInterviews ? (
              userInterviews?.map((interview)=>(
                <InterviewCard {...interview} key={interview.id}/>
              ))): (<p>you haven't taken any interview yet</p>)} 


              </div>

         </section>

         <section className="flex flex-col gap-6 mt-8">
             <h2>Take Interviews</h2>

             <div className="interviews-section">
             {hasUpcomingInterviews ? (
            latestInterview?.map((interview) => (
              <InterviewCard
              {...interview} key={interview.id}
              />
            ))
          ) : (
            <p>There are no interviews available</p>
          )}

                {/* <p>You haven't taken any interview yet.</p> */}
             </div>
         </section>
      
      
      </>
      
    </div>
  )
}

export default page