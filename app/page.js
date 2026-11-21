import Image from "next/image";
import EnquiryForm from "./EnquiryForm";
import {
  contact,
  plate,
  valueAdds,
  industries,
  machines,
  services,
  commissioningSteps,
  commonRepairs,
  supplied,
  aboutMachines,
  career,
  work,
  waLink,
} from "../lib/site";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="header">
        <div className="wrap header-inner">
          <a href="#top" className="brand">
            Stamfort <span>Technical Solutions</span>
          </a>
          <nav aria-label="Main">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-signal btn-small" href={`tel:${contact.phoneTel}`}>
            Call now
          </a>
        </div>
      </header>

      <main id="main">
        {/* HERO: the machine data plate */}
        <section id="top" className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>Machine down? We get it running again.</h1>
              <p className="lead">
                Repair, preventive maintenance, and erection and commissioning for industrial
                machines of any make. Mechanical, electrical, hydraulic and pneumatic work, from
                Bengaluru to sites across India.
              </p>
              <div className="actions">
                <a className="btn btn-signal" href={`tel:${contact.phoneTel}`}>
                  Call {contact.phoneDisplay}
                </a>
                <a className="btn btn-ghost" href={waLink} target="_blank" rel="noopener">
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <div className="plate" aria-label="Company details">
              <span className="rivet r1" aria-hidden="true" />
              <span className="rivet r2" aria-hidden="true" />
              <span className="rivet r3" aria-hidden="true" />
              <span className="rivet r4" aria-hidden="true" />
              <p className="plate-title">STAMFORT</p>
              <p className="plate-sub">Technical Solutions</p>
              <dl>
                {plate.map(([k, v]) => (
                  <div key={k} className="plate-row">
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* WHAT WE WORK ON */}
        <section className="section" aria-labelledby="value-h">
          <div className="wrap">
            <h2 id="value-h">How we add value</h2>
            <p className="section-lead">
              Engineering solutions for every part of the manufacturing floor, with a strong
              customer-first work ethic.
            </p>
            <ul className="ticks cols-2">
              {valueAdds.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>

            <div className="split">
              <div>
                <h3>Industries we serve</h3>
                <ul className="plain">
                  {industries.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Machines we work on</h3>
                <ul className="plain cols-2">
                  {machines.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section section-green" aria-labelledby="services-h">
          <div className="wrap">
            <h2 id="services-h">Services</h2>
            <p className="section-lead">
              For machines and systems in the hydraulic, electrical, pneumatic and mechanical
              fields.
            </p>

            <div className="services">
              {services.map((s) => (
                <div key={s.title} className="service">
                  <h3>{s.title}</h3>
                  <ul className="plain">
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="repairs">
              <h3>Repairs we are called for most</h3>
              <dl>
                {commonRepairs.map(([m, d]) => (
                  <div key={m}>
                    <dt>{m}</dt>
                    <dd>{d}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="steps-block">
              <h3>Erection and commissioning</h3>
              <p>Setting up machines and plants, start to finish.</p>
              <ol className="steps">
                {commissioningSteps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="section" aria-labelledby="work-h">
          <div className="wrap">
            <h2 id="work-h">Our work</h2>
            <p className="section-lead">Machines, mechanisms and fabrication from our projects.</p>
            <ul className="gallery">
              {work.map((p) => (
                <li key={p.src}>
                  <figure>
                    <Image
                      src={p.src}
                      alt={p.caption}
                      width={p.w}
                      height={p.h}
                      sizes="(max-width: 720px) 50vw, 25vw"
                    />
                    <figcaption>{p.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>

            <div className="supplied">
              <h3>Machines we build and supply</h3>
              <div className="supplied-grid">
                {supplied.map((m) => (
                  <div key={m.name}>
                    <h4>{m.name}</h4>
                    <ul className="plain">
                      {m.specs.map((sp) => (
                        <li key={sp}>{sp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="supplied-note">
                <a href="#contact">Ask for a quote</a> or see the full list on{" "}
                <a href={contact.indiamart} target="_blank" rel="noopener">
                  our IndiaMART profile
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section section-plate" aria-labelledby="about-h">
          <div className="wrap about">
            <div>
              <h2 id="about-h">About us</h2>
              <p>
                Stamfort Technical Solutions started in May 2016. The proprietor, {contact.name}, is a
                graduate engineer with over 25 years in maintenance, reconditioning, and erection
                and commissioning of machine tools.
              </p>
              <ul className="plain">
                {aboutMachines.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <p>
                We carry ideas from one project into the next sector, and our on-time delivery and
                quick response keep existing clients with us. We are committed to delivering with
                least defects, and every visit ends with a report with photos within 24 hours.
              </p>
              <p className="note">
                Notable installation: a complete noodle production line for Indo-Nissin (India) Pvt.
                Ltd., Khordha, Odisha.
              </p>
            </div>

            <div>
              <h3>Experience before Stamfort</h3>
              <table className="career">
                <tbody>
                  {career.map(([c, where]) => (
                    <tr key={c}>
                      <th scope="row">{c}</th>
                      <td>{where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section" aria-labelledby="contact-h">
          <div className="wrap contact">
            <div>
              <h2 id="contact-h">Tell us about your machine</h2>
              <p className="section-lead">
                Describe the machine and the problem. We reply on WhatsApp or by phone.
              </p>
              <dl className="contact-list">
                <div>
                  <dt>Phone and WhatsApp</dt>
                  <dd>
                    <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>IndiaMART</dt>
                  <dd>
                    <a href={contact.indiamart} target="_blank" rel="noopener">
                      Stamfort Technical Solutions
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Based in</dt>
                  <dd>{contact.city}. We travel to sites anywhere in India.</dd>
                </div>
              </dl>
            </div>
            <EnquiryForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <p>
            <strong>Stamfort Technical Solutions</strong>
            <br />
            {contact.city}
          </p>
          <p>GSTIN {contact.gstin}</p>
        </div>
      </footer>
    </>
  );
}
