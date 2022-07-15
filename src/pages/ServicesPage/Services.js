import React from 'react';
import Footer from "../../components/Footer/Footer";
import Questions from "../../components/Questions/Questions";
import Brand from "../../components/Brand/Brand";
import Contacts from "../../components/Contacts/Contacts";
import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";
import Care from "../../components/Care/Care";
import MeetTeam from "../../components/Team/MeetTeam/MeetTeam";
import Reviews from "../../components/Reviews/Reviews";
import Protect from "../../components/Protect/Protect";
import RepairCards from "../../components/Repair/RepairCards/RepairCards";
import RepairCustomCards from "../../components/Repair/RepairCustomCards/RepairCustomCards";

export function Services({CardInfo, RepairInfo, CareInfo, Team, Review, ProtectCards, Brands}) {
  return (
    <>
      <section className="RepairSection" id="Repair">
        <RepairCards CardInfo={CardInfo}/>
      </section>
      <section>
        <RepairCustomCards/>
      </section>
      <section className="CareSection" id="Care">
        <Care CareInfo={CareInfo}/>
      </section>
      <section className="MeetSection" id="Meet">
        <MeetTeam Team={Team}/>
      </section>
      <section className="ReviewSection" id="Reviews">
        <Reviews Review={Review}/>
      </section>
      <section className="ProtectSection" id="Protect">
        <Protect ProtectCards={ProtectCards}/>
      </section>
      <section className="BrandSection" id="Brand">
        <Brand Brands={Brands}/>
      </section>
      <section className="ContactSection" id="Contacts">
        <Contacts/>
      </section>
      <section className="ApplicationFormSection" id="Application">
        <ApplicationForm/>
      </section>
      <section className="QuestionsSection" id="Questions">
        <Questions/>
      </section>
      <section className="FooterSection" id="Footer">
        <Footer/>
      </section>
    </>
  )
}

export default Services;