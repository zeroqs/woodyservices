import React from 'react';
import Care from "../../components/Care/Care";
import Reviews from "../../components/Reviews/Reviews";
import Protect from "../../components/Protect/Protect";
import Brand from "../../components/Brand/Brand";
import Contacts from "../../components/Contacts/Contacts";
import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";
import Questions from "../../components/Questions/Questions";
import Repair from "../../components/Repair/Repair";
import MeetTeam from "../../components/Team/MeetTeam/MeetTeam";
import Footer from "../../components/Footer/Footer";
import RepairCards from "../../components/Repair/RepairCards/RepairCards";

export function Main({CardInfo, RepairInfo, CareInfo, Team, Review, ProtectCards, Brands}) {
  return (
    <>
      <section className="RepairSection" id="Repair">
        <RepairCards CardInfo={CardInfo}/>
        <Repair RepairInfo={RepairInfo}/>
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

export default Main;