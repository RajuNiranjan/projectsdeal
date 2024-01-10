import React from "react";
import order from "../../assets/Order-Now-Button-Vector.png";
import { FaWhatsapp } from "react-icons/fa";

const Sectionone = () => {
  return (
    <section>
      <div>
        <div className="text-center text-4xl my-5 text-[#a98511]">
          <h1>We specialise in Essays, Assignments, Courseworks, Online</h1>
          <h1>exams, and Dissertation Writing Services, Since 2001!</h1>
        </div>
        <p className="">
          We have literally delivered success and helped thousands of anxious
          and vulnerable students, many many of your senior and super seniors
          peers, with Assignments, Coursework, Online exams, and Dissertations.
          We understand and appreciate the challenges you face in juggling your
          job, studies, family, your ugly and demanding supervisor, and we feel
          responsible that your career and literally your life depends on your
          Results. We have delivered success, Since 2001, So now it's effortless
          to deliver exactly what your supervisor is looking for. If you study
          in UK, you can please focus on your other important priorities while
          we look after your academic success. Effortlessly!
        </p>
      </div>
      <div>
        <div className="flex justify-center my-5">
          <img className="w-52 " src={order} alt="" />
        </div>
        <p>
          <span className="font-bold">
            Projectsdeal is the best dissertation writing services in the UK
          </span>
          , with all 5 star reviews. Our team of experienced British writers
          will craft your dissertation with a research-oriented approach,
          ensuring exceptional quality. Our dissertation writers will diligently
          work on your dissertation, making it engaging and captivating,
          ultimately helping you score distinction. Projectsdeal has years of
          experience in the industry, making it one of the top dissertation
          writing service in UK. All of our dissertation helpers are veteran
          writers and research experts with several years of expertise. We are
          hailed as the best dissertation help for providing PhD thesis,
          assignments and essay writing.
        </p>
      </div>
      <div>
        <div className="my-10">
          <div className="flex justify-center flex-col items-center gap-3 my-5">
            <h1 className="text-3xl text-blue-700">
              For Urgent Deadlines WhatsApp us
            </h1>
            <div className="flex items-center bg-[#59CE72] text-white px-3 py-2 w-max rounded-md gap-1 cursor-pointer">
              <FaWhatsapp />
              <p>WhatsApp +447447882377</p>
            </div>
          </div>
          <p>
            When it comes to hiring Best Dissertation Writing Service in London
            trust becomes one of the major concerns for students. Students have
            many concerns regarding the methodology, deadlines, quality of work,
            pricing, experience of the British writers, plagiarism, and
            revisions or amendments etc. We are so good that the results of our
            works speak for themselves as more than 82% of our clients have
            bagged for themselves Merits and Distinctions. Balancing your odd
            Job, other imp priorities and Score!
          </p>
          <p>
            A dissertation determines your overall grade and can either help
            your academic career or break it. It requires investing time,
            energy, motivation and skills such as research skills in order to do
            a great job. However, to ensure that your dissertation is not only
            accepted but also wins you a great grade and high regard, you must
            present an original dissertation that fulfills the objectives it has
            indicated. It should be well-researched, coherent and a
            demonstration of knowledge applied in solving a real life situation
            effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sectionone;