import React from 'react'

const Reservation = () => {
    const paragraphs = [
        {id:1,para:'Reservation is an essential policy implemented to ensure equal opportunities for individuals belonging to historically disadvantaged communities. At Atal bihari Vajapayee Skill University (ABVSU), the reservation system is designed to promote inclusivity and diversity in education.'},
        {id:2,para:'ABVSU follows the government-mandated reservation policies to provide fair access to education for students from Scheduled Castes (SC), Scheduled Tribes (ST), Other Backward Classes (OBC), Economically Weaker Sections (EWS), and Persons with Disabilities (PWD). These policies help bridge the gap and create a level playing field for all aspiring students.'},
        {id:3,para:'The university ensures that reservation policies are effectively implemented in admissions, scholarships, and faculty recruitment. Special provisions are also made for students from marginalized communities to receive financial aid, mentorship, and academic support.'},
        {id:4,para:'In addition to statutory reservations, ABVSU actively works towards creating an inclusive environment where students from all backgrounds can thrive. Awareness programs and workshops are conducted to sensitize the university community about the importance of equal opportunity and social justice.'},
        {id:5,para:'By upholding reservation policies, ABVSU reaffirms its commitment to equitable education and societal progress, ensuring that every student has the opportunity to achieve academic and professional success.'}
    ]
  return (
    <section>
        <div className='md:text-left mx-10'>
            <h1 className='font-bold text-3xl text-[#003262]'>Reservation</h1>
            {
                paragraphs.map((items)=>(
                    <div key={items.id} >
                        <p className='mt-4 '>{items.para}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Reservation