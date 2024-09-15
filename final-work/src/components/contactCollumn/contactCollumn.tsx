import ContactCard from "../contactCard/contactCard";
import useFetch from "../hooks/useFetch";
import style from "./contactCollumn.module.css";



function ContactCollumn() {
  const contactInfo= useFetch("src/api/contact.json")

  return (
    <div>
      <div>
        <h2>Contact Info</h2>
        <div className={style.info}>
          <ContactCard
            image="/src/assets/ic--outline-email.png"
            title="Mail me"
            information={contactInfo?.email}
          />
          <ContactCard
            image="/src/assets/mynaui--telephone.png"
            title="Contact me"
            information={contactInfo?.phones}
          />
          <ContactCard
            image="/src/assets/akar-icons--location.png"
            title="Mail me"
            information={contactInfo?.address}
          />
        </div>
      </div>
      <div >
        <h2>Social Info</h2>
        <div className={style.social}>
          <ContactCard image="/src/assets/mdi--world-wide-web.png" />
          <ContactCard image="/src/assets/mdi--instagram.png" />
          <ContactCard image="/src/assets/mingcute--twitter-line.png" />
        </div>
      </div>
    </div>
  );
}

export default ContactCollumn;
