const NAME_CONTACT_INFO = {
  heading: 'YOUR NAME & CONTACT INFO',
  body: (
    <div>
      <p style={{ fontWeight: 'bold' }}>Description</p>
      <p>
        Your name will be listed here, along with contact information. This
        should include your phone number and a valid email address. You may or
        may not wish to include your physical address as well.
      </p>
      <p style={{ fontWeight: 'bold' }}>Tips</p>
      <ul>
        <li>
          Make sure your name is large enough to read easily, but not so large
          that it takes up needed space.
        </li>
        <li>
          Don’t have a professional-sounding email address? Get one.
          “TMason@gmail.com” sounds much better than “pizzalover88@gmail.com”.
        </li>
        <li>
          Use a nickname if you are worried about the pronunciation of your
          name.
        </li>
        <li>
          When providing contact information, include your full name, address
          (if applicable), phone number and email. Be sure you can be easily
          reached by a hiring manager.
        </li>
        <li>
          When adding a phone number, add a cell phone if at all possible.
          Somewhere you can be reached easily.
        </li>
      </ul>
      <p style={{ fontWeight: 'bold' }}>Examples</p>
      <ul>
        <li>Emily Smithfield</li>
        <li>Avalia “Ava” Masterson</li>
        <li>John@johnthewriter.com</li>
        <li>Jward@gmail.com</li>
      </ul>
    </div>
  ),
};
const DATE = {
  heading: 'DATE',
  body: (
    <div>
      <p style={{ fontWeight: 'bold' }}>Description</p>
      <p>This section displays the date you are sending your letter.</p>

      <p style={{ fontWeight: 'bold' }}>Tips</p>
      <ul>
        <li>
          The date will be displayed at the top, which is common practice for
          formal letters. Dates are not required when sending an email due to
          emails already including a timestamp.
        </li>
      </ul>
      <p style={{ fontWeight: 'bold' }}>Examples</p>
      <ul>
        <li>January 1st, 2022</li>
        <li>1st January 2022</li>
        <li>01/01/2022</li>
        <li>1/1/2022</li>
      </ul>
    </div>
  ),
};
const RECIPIENT = {
  heading: 'RECIPIENT',
  body: (
    <div>
      <p style={{ fontWeight: 'bold' }}>Description</p>
      <p>
        This area shows the receiver’s name and mailing address. While not
        required, doing so can enhance a formal cover letter.
      </p>

      <p style={{ fontWeight: 'bold' }}>Tips</p>
      <ul>
        <li>
          Avoid using phrases like “To whom it may concern”, or “Hiring
          Department”. Use this section only when writing to a specific
          individual.
        </li>
      </ul>
      <p style={{ fontWeight: 'bold' }}>Examples</p>
      <ul>
        <li>
          General Motors <br />
          John Smith <br />
          1234 Car Blvd. <br />
          Brownstown, MI 12345 <br />
        </li>
        <li>
          Plastic Sales Inc. <br />
          Hiring Manager <br />
          8900 Uptown Rd. <br />
          Jamestown, MS 48000 <br />
        </li>
      </ul>
    </div>
  ),
};

const LETTER_HEADING = {
  heading: 'LETTER HEADING',
  body: (
    <div>
      <p style={{ fontWeight: 'bold' }}>Description</p>
      <p>
        This section provides your recipient with a short preview of why you are
        writing the letter.
      </p>

      <p style={{ fontWeight: 'bold' }}>Tips</p>
      <ul>
        <li>
          Make your subject eye-catching. Give your reader a reason to want to
          read further.
        </li>
        <li>
          Keep it short. Recipients will lose interest in long, detailed
          subjects (before they even make it to your letter!).{' '}
        </li>
        <li>
          If a job code or keyphrase is required in the job advertisement, be
          sure to include it in your subject.
        </li>
        <li>
          List the job title to prevent the hiring manager from having to read
          your entire letter before knowing what it’s about.
        </li>
      </ul>
      <p style={{ fontWeight: 'bold' }}>Examples</p>
      <ul>
        <li>
          RE: Results-driven{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span> looking to
          fill [job title] position
        </li>
        <li>
          RE:{' '}
          <span style={{ fontWeight: 'bold' }}>[job code or keyphrase]</span> -{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span> available to
          start <span style={{ fontWeight: 'bold' }}>[date]</span>
        </li>
        <li>
          Expert level{' '}
          <span style={{ fontWeight: 'bold' }}>[current job title]</span>{' '}
          available for hire
        </li>
        <li>
          RE: Responding to{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span> advertisement
        </li>
        <li>
          RE: Need an experienced{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span>? Look no
          further
        </li>
        <li>
          RE: Highly qualified{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span> applying for{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span> position
        </li>
        <li>
          RE:{' '}
          <span style={{ fontWeight: 'bold' }}>[job code or keyphrase]</span>
        </li>
        <li>
          RE:{' '}
          <span style={{ fontWeight: 'bold' }}>
            [job title][posting platform]
          </span>{' '}
          ad
        </li>
      </ul>
    </div>
  ),
};

const SALUTATION = {
  heading: 'SALUTATION',
  body: (
    <div>
      <p style={{ fontWeight: 'bold' }}>Description</p>
      <p>
        The salutation area provides space for greeting the person you are
        writing to.
      </p>

      <p style={{ fontWeight: 'bold' }}>Tips</p>
      <ul>
        <li>
          Specificity is better. If at all possible, address a specific
          individual in your greeting.
        </li>
        <li>
          Do some digging. Re-read the job advertisement or call the business to
          get a name. A personalized greeting has been shown to produce better
          results. If you are unable to find a name, address your greeting to
          the most relevant hiring position.
        </li>
      </ul>
      <p>Click the BRACKET to replace, click the [] to remove examples.</p>
      <ul>
        <li>
          Dear <span style={{ fontWeight: 'bold' }}>[Full Name]</span>:
        </li>
        <li>Dear Hiring Manager:</li>
        <li>
          Dear <span style={{ fontWeight: 'bold' }}>[department]</span> Manager:
        </li>
        <li>Dear Recruiter for [job title]:</li>
        <li>
          Dear Mr. <span style={{ fontWeight: 'bold' }}>[Last Name]</span>:
        </li>
        <li>
          Dear Ms. <span style={{ fontWeight: 'bold' }}>[Last Name]</span>:
        </li>
        <li>To the Human Resources Director:</li>
        <li>
          Mr. <span style={{ fontWeight: 'bold' }}>[Last Name]</span>:
        </li>
        <li>
          Ms. <span style={{ fontWeight: 'bold' }}>[Last Name]</span>:
        </li>
        <li>To the Appropriate Hiring Manager:</li>
        <li>Dear Recruitment Team:</li>
      </ul>
    </div>
  ),
};

const INTRODUCTION = {
  heading: 'INTRODUCTION',
  body: (
    <div>
      <p style={{ fontWeight: 'bold' }}>Description</p>
      <p>
        The introduction area includes one or two sentences to introduce and set
        yourself apart from other job seekers.
      </p>

      <p style={{ fontWeight: 'bold' }}>Tips</p>
      <ul>
        <li>
          This is your chance to shine! Don’t be generic. Set yourself apart by
          proving to your reader why you are the perfect person for the job.
        </li>
        <li>
          Be specific. Tell your recipient how you can help their company. Give
          examples.
        </li>
        <li>
          If you have a stellar testimonial or positive feedback, add a quote to
          prove you’re as good as you say you are.
        </li>
      </ul>
      <p style={{ fontWeight: 'bold' }}>Examples</p>
      <ul>
        <li>
          I am a <span style={{ fontWeight: 'bold' }}>[job title]</span> with{' '}
          <span style={{ fontWeight: 'bold' }}>[number of years]</span>{' '}
          experience. I have{' '}
          <span style={{ fontWeight: 'bold' }}>[accomplishments]</span> and can
          do the same for{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span>.
        </li>
        <li>
          Thank you for reading this letter. As a{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span> previous
          clients have referred to as{' '}
          <span style={{ fontWeight: 'bold' }}>[quote or testimonial]</span>, I
          feel I can add value to your business.
        </li>
        <li>
          If you’re looking for a{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span> with proven
          results, look no further. I have{' '}
          <span style={{ fontWeight: 'bold' }}>[accomplishments]</span> for
          companies, resulting in{' '}
          <span style={{ fontWeight: 'bold' }}>[statistics]</span>.
        </li>
        <li>
          As you know, the{' '}
          <span style={{ fontWeight: 'bold' }}>[industry]</span> world has
          exploded in recent years. I helped{' '}
          <span style={{ fontWeight: 'bold' }}>[company]</span>{' '}
          <span style={{ fontWeight: 'bold' }}>[accomplishments]</span> and
          would love to do the same for you.
        </li>
        <li>
          After working for years as a{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span>, I feel I
          would be a perfect fit for{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span>.
        </li>
        <li>
          I am a highly qualified{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span> and would love
          to discuss working with{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span>. Here’s
          what a few of my clients have said:{' '}
          <span style={{ fontWeight: 'bold' }}>[testimonial]</span>
          <span style={{ fontWeight: 'bold' }}>[testimonial]</span>
        </li>
        <li>
          I’m sure you are receiving a lot of applications in response to your
          advertisement. Because I value both of our times, I’d like to briefly
          show you how I can help{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span> grow.
        </li>
        <li>
          Attached is my resume showing my previous experience as a{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span>.
        </li>
        <li>
          I’m replying to your advertisement because I feel I can be just what{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span> needs.
        </li>
        <li>
          After reading your job posting, I knew I had to send you a letter. As
          a <span style={{ fontWeight: 'bold' }}>[job title]</span> who has
          worked in <span style={{ fontWeight: 'bold' }}>[industry]</span> for{' '}
          <span style={{ fontWeight: 'bold' }}>[number]</span> years, I feel I
          can put my skills to good use at{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span>.
        </li>
        <li>
          Rather than promise you why I’m perfect for the{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span> position, I’d
          like to show you. Here are a couple examples of returns I’ve produced
          in <span style={{ fontWeight: 'bold' }}>[industry]</span>.
        </li>
        <li>
          I’ve been a loyal customer of{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span> as long as
          I can remember. Working with your company would be a dream.
          Thankfully, I think my experience and skill set can make this dream a
          reality!
        </li>
        <li>
          In your position, the last thing I’d want to do is hire someone who is
          under-qualified and unequipped to meet the job demands. I have{' '}
          <span style={{ fontWeight: 'bold' }}>[number]</span> years’ experience
          as a <span style={{ fontWeight: 'bold' }}>[job title]</span> and can
          help take your business to the next level.
        </li>
        <li>
          I believe my background and skills are exactly what{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span> needs at
          this time. Please see my attached resume for proof.{' '}
        </li>
      </ul>
    </div>
  ),
};

const CORE_CONTENT = {
  heading: 'CORE CONTENT',
  body: (
    <div>
      <p style={{ fontWeight: 'bold' }}>Description</p>
      <p>
        This section is the bulk of your cover letter. You’ve (hopefully)
        expressed why you’re perfect for the job in the introduction. Now you
        get to prove it.
      </p>

      <p style={{ fontWeight: 'bold' }}>Tips</p>
      <ul>
        <li>Be specific. Sensing a theme?</li>
        <li>
          Share details but keep it short. Provide reasons why you are the
          perfect candidate for the job.{' '}
        </li>
        <li>
          Don’t do all the talking. Use quotes, testimonials, and statistics to
          prove to your recipient that you’re more than empty words. Show them
          why they need you.
        </li>
      </ul>
      <p style={{ fontWeight: 'bold' }}>Examples</p>
      <ul>
        <li>
          Being a <span style={{ fontWeight: 'bold' }}>[job title]</span> is one
          thing. Being a successful{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span>, on the other
          hand, is another. Luckily, I am both. Here are what a few of my
          previous clients have said:
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>[testimonial or quote]</span>
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>[testimonial or quote]</span>
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>[testimonial or quote]</span>
        </li>
        <li>
          I have <span style={{ fontWeight: 'bold' }}>[accomplishment]</span>{' '}
          for <span style={{ fontWeight: 'bold' }}>[company size]</span>{' '}
          companies, and had the opportunity to work alongside other top-tier{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span>s in a growing
          industry. This has forced me to keep my skills up to date in a
          fast-paced environment, ensuring the best practices are implemented.
        </li>
        <li>
          I’m excited for the opportunity to work at{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span>. If you’re
          looking for someone who can{' '}
          <span style={{ fontWeight: 'bold' }}>[job responsibilities]</span>,
          I’d love to discuss this further.
        </li>
        <br />
        <li>
          I worked at <span style={{ fontWeight: 'bold' }}>[company]</span> for{' '}
          <span style={{ fontWeight: 'bold' }}>[number]</span> years as a{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span>. During that
          time, I was able to do the following:
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>[accomplishment]</span>
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>[accomplishment]</span>
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>[accomplishment]</span>
        </li>
        <li>
          These are a few of the examples of what I’ve been able to do as a{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span>. I believe my
          previous experience and track record prove I can be an asset to your
          company as well.
        </li>
        <br />
        <li>
          A <span style={{ fontWeight: 'bold' }}>[degree]</span> in{' '}
          <span style={{ fontWeight: 'bold' }}>[major]</span> and{' '}
          <span style={{ fontWeight: 'bold' }}>[number]</span> years’ experience
          as a <span style={{ fontWeight: 'bold' }}>[job title]</span> have
          trained me perfectly for working at{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span>.
        </li>
        <li>
          During my <span style={{ fontWeight: 'bold' }}>[number]</span> years
          at <span style={{ fontWeight: 'bold' }}>[company name]</span>, I{' '}
          <span style={{ fontWeight: 'bold' }}>[job responsibilities]</span>,
          resulting in{' '}
          <span style={{ fontWeight: 'bold' }}>[accomplishment]</span>. I can
          bring the same level of success to{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span> as well.
        </li>
        <li>
          My attached resume provides more details, but here’s a quick glance at
          my most relevant skills and qualifications:
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>[skill or qualification]</span>
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>[skill or qualification]</span>
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>[skill or qualification]</span>
        </li>
        <br />
        <li>
          <span style={{ fontWeight: 'bold' }}>[job responsibilities]</span> are
          a few areas I am particularly skilled in. My experience as a{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span> adds to my
          usefulness in the{' '}
          <span style={{ fontWeight: 'bold' }}>[industry]</span> industry.
          Throughout my career, I have{' '}
          <span style={{ fontWeight: 'bold' }}>[major accomplishments]</span>. I
          would love to do the same for{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span>. Here are a
          few examples of results I’ve produced:
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>[accomplishment]</span>
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>[accomplishment]</span>
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>[accomplishment]</span>
        </li>
        <li>
          My resume (attached) lists previous job experience. I think you will
          find I am a qualified and capable candidate for the{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span> position at{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span>.
        </li>
        <br />
        <li>
          A long, successful background in{' '}
          <span style={{ fontWeight: 'bold' }}>[industry]</span> has proven to
          me that <span style={{ fontWeight: 'bold' }}>[common problem]</span>{' '}
          has to be addressed for a company to be successful. My experience as a{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span> for{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span> has given
          me the skills needed to be the solution.
        </li>
        <li>
          Below are three specific problems I was able to solve, resulting in{' '}
          <span style={{ fontWeight: 'bold' }}>[results]</span> for{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span>:
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>[problem and solution]</span>
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>[problem and solution]</span>
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>[problem and solution]</span>
        </li>
        <li>
          If you’re looking for the same type of results for your company, I’d
          love to discuss further details with you.
        </li>
      </ul>
    </div>
  ),
};

const REQUEST = {
  heading: 'REQUEST',
  body: (
    <div>
      <p style={{ fontWeight: 'bold' }}>Description</p>
      <p>
        This section gives you the opportunity to move your reader to action.
        Convince them to move forward with you in their hiring procedure.
      </p>

      <p style={{ fontWeight: 'bold' }}>Tips</p>
      <ul>
        <li>Keep it short, but meaningful. Choose words that will stick.</li>
        <li>
          Reaffirm why they should hire you. Remind them of the benefits to
          doing so.
        </li>
        <li>
          Don’t leave them questioning what was said in your letter, or if it’s
          worth contacting you. Stand out.
        </li>
        <li>
          Don’t assume they will follow-up with you. As good as your cover
          letter may be, sometimes it’s not enough. Tell them how and when you
          plan on following up with them personally.
        </li>
      </ul>
      <p style={{ fontWeight: 'bold' }}>Examples</p>
      <ul>
        <li>
          If you feel like I’d be a good fit at{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span> after
          reading this letter, please reach out to me. I’ll contact you in a few
          days to make sure you received my letter and resume.
        </li>
        <li>
          If you’re looking for a{' '}
          <span style={{ fontWeight: 'bold' }}>[job title]</span> who can
          produce real, beneficial results, please call me. I’ll send you an
          email next week to confirm you received my letter.
        </li>
        <li>
          As mentioned previously, a copy of my resume is attached. I think
          you’ll find it contains all the relevant information you need to make
          an informed decision. I look forward to hearing from you.
        </li>
        <li>
          If you’d like to discuss working together, reach out to me anytime. I
          am available to meet for an in-person interview at your convenience.
        </li>
        <li>
          Feel free to call me at the phone number above anytime (or send an
          email). I look forward to working together in the near future. I’ll
          follow-up with you in a couple of days to make sure you received my
          email.
        </li>
        <li>
          After reading through some of my skills and previous experiences, I
          hope you find I am the perfect candidate for{' '}
          <span style={{ fontWeight: 'bold' }}>[company name]</span>. I’m
          excited for the opportunity to work with you. Call or email me anytime
          if you’d like to discuss further details.
        </li>
        <li>
          Attached is my resume, detailing further experiences and job history.
        </li>
        <li>
          If you’d like to see more results and previous job experience, please
          see the attached resume. I have listed some of my major
          accomplishments and results, along with a thorough job history.
        </li>
        <li>
          I believe I can bring the skills needed to produce positive results
          with <span style={{ fontWeight: 'bold' }}>[company name]</span>. Feel
          free to reach out to me anytime by phone or email. I’ll contact you on{' '}
          <span style={{ fontWeight: 'bold' }}>[day]</span> to confirm you
          received my letter.
        </li>
        <li>
          Don’t hesitate to call me if you have further questions. I would love
          to meet with you in the near future to discuss how we can move forward
          in working together.
        </li>
      </ul>
    </div>
  ),
};

const CONCLUSION = {
  heading: 'CONCLUSION',
  body: (
    <div>
      <p style={{ fontWeight: 'bold' }}>Description</p>
      <p>
        This is it. Conclude your letter by offering a complimentary close,
        followed by your name.
      </p>

      <p style={{ fontWeight: 'bold' }}>Tips</p>
      <ul>
        <li>Be yourself but be professional. </li>
        <li>Fit your closing remarks to the job. </li>
        <li>
          If fitting, thank the recipient for taking the time to read your
          letter.
        </li>
        <li>
          Leave a couple of blank lines after your complimentary close, then
          write your name. If you’re typing the letter, you may wish to import a
          digital signature as well.
        </li>
      </ul>
      <p style={{ fontWeight: 'bold' }}>Examples</p>
      <ul>
        <li>Sincerely,</li>
        <li>Regards,</li>
        <li>Thank you for taking the time to read this,</li>
        <li>Thank you for your consideration,</li>
        <li>Thank you in advance,</li>
        <li>Looking forward to speaking with you further,</li>
        <li>Thank you,</li>
        <li>Thank you for reviewing this letter,</li>
        <li>Thank you for your time,</li>
        <li>Thank you and have a great day,</li>
      </ul>
    </div>
  ),
};
const CoverLetterProtipData = {
  NAME_CONTACT_INFO,
  DATE,
  RECIPIENT,
  LETTER_HEADING,
  SALUTATION,
  INTRODUCTION,
  CORE_CONTENT,
  REQUEST,
  CONCLUSION,
};

export { CoverLetterProtipData };
