import React from "react";
import img from "@/public/images/fashion.jpg";
import Image from "next/image";

const ApparelAndFashionDesigning = () => {
  return (
    <section>
      <div className="container px-4 md:px-0 mx-auto py-10 max-w-7xl">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/3 flex flex-col gap-4 text-justify">
              <h2 className="text-2xl md:text-3xl font-bold">
                Apparel And Fashion Designing
              </h2>
              <p>
                {`Atal Bihari Vajpayee Skill University (ABVSU) stands at the forefront of apparel and fashion designing education, equipping students with the skills and expertise needed to excel in the ever-evolving fashion industry. In today’s world, fashion serves as both a creative expression and a thriving economic sector, driving the demand for innovative and skilled professionals. ABVSU’s specialized programs are designed to foster creativity, enhance technical proficiency, and develop a strong understanding of market trends, empowering aspiring designers to make their mark in the fashion industry.`}
              </p>
              <p>
                The curriculum for the apparel and fashion designing programs at
                Atal Bihari Vajpayee Skill University (ABVSU) is thoughtfully
                designed to cover a diverse range of subjects crucial for a
                successful career in the fashion industry. Students explore key
                areas such as fashion design principles, textile science,
                garment construction, pattern making, fashion illustration, and
                merchandising. This holistic approach ensures a strong
                foundation in both the creative and technical aspects of
                fashion. Additionally, the curriculum is continuously updated to
                incorporate emerging trends, technological advancements, and
                evolving industry demands, ensuring that students stay ahead in
                the dynamic world of fashion.
              </p>
            </div>
            <div className="w-full md:w-1/3 relative my-auto">
              <Image
                src={img}
                width={400}
                height={250}
                alt="Our Work"
                className="w-full max-w-[400px] h-auto object-cover "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-justify">
          <p>
            {`One of the hallmarks of ABVSU’s fashion designing program is its emphasis on practical learning and real-world application. Students engage in hands-on projects that allow them to translate their creative ideas into tangible designs. They are encouraged to create their own collections, participate in fashion shows, and showcase their work through exhibitions. This practical exposure not only enhances their design skills but also builds confidence in their abilities to present and market their creations. ABVSU also collaborates with local fashion houses and boutiques, providing students with internship opportunities that offer valuable industry experience.`}
          </p>
          <p>Creativity lies at the heart of fashion design, and Atal Bihari Vajpayee Skill University (ABVSU) cultivates an environment that nurtures innovation and originality. Students are encouraged to experiment with diverse materials, techniques, and styles, allowing them to develop their unique design perspectives. Interactive workshops conducted by esteemed guest designers and industry professionals provide hands-on experience with contemporary trends and cutting-edge practices, ensuring that students are well-equipped for the ever-evolving fashion industry.
          </p>
          <p>Collaboration is integral to the design process, and ABVSU fosters a culture of teamwork and cooperation. Through group projects, students engage in real-world fashion design scenarios, enhancing their ability to communicate and collaborate effectively. This experiential approach not only refines their technical expertise but also strengthens essential soft skills such as leadership, problem-solving, and adaptability—key attributes for thriving in the dynamic fashion industry.</p>
        </div>
      </div>
    </section>
  );
};

export default ApparelAndFashionDesigning;
