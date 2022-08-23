import Container from '../../layout/Container'
import Underline from '../../Underline'

const Services = () => {
  return (
    <div className="bg-primary-gray-2 min-h-screen">
      <Container className="min-h-screen">
        <h2 className="text-4xl font-bold font-helvetica-black uppercase mt-20">
          Our services
        </h2>
        <Underline color="purple" />
        <h2 className="uppercase font-bold text-5xl mt-32 font-helvetica-black">
          Research
        </h2>
        <Underline color="purple" />

        <div className="text-primary-purple-1 font-bold text-4xl mt-10 font-helvetica-black">
          <h2>
            Buying media is not always about reaching everyone. It&apos;s about
            reaching and motivating
          </h2>
          <h2>the right people for your product or service.</h2>
        </div>

        <div className="grid grid-cols-1 leading-relaxed lg:grid-cols-2 gap-y-20 lg:gap-5 mt-10 text-gray-800 text-xl">
          <div>
            <p>
              Strategic media planning and effective media buying starts with
              RESEARCH. We
            </p>
            <p>
              deliver into all quantifiable aspects of our client&apos;s target
              audiences and they benefit from:
            </p>

            <ul className="list-disc pl-5 mt-5">
              <li>
                <p>
                  A more through understanding of media placement
                  recommendations.
                </p>
              </li>

              <li>
                <p>Stronger confidence in our recommendations.</p>
              </li>

              <li>
                <p>Better response to advertising campaigns.</p>
              </li>
            </ul>
          </div>

          <div>
            <p>
              We&apos;re known for being smarter in our approach and
              implementation of media
            </p>
            <p>
              assignments because we study audience lifestyles and know their
              media habits.
            </p>
            <p>
              We offer smarter, more informed placement decisions to our
              clients.
            </p>
            <p>
              Hama Media uses quantitative and qualitative research tools in its
              stratgic
            </p>
            <p>planning in order to your brand the reach its needs.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Services
