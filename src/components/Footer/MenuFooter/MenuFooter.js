import React from 'react';
import './menufooter.scss'
import RepairLinks from "../../Repair/RepairLinks/RepairLinks";
import {ContactsList} from "../../Contacts/ContactsList";
import {Panel, PanelGroup} from "rsuite";
import NavLinksFooter from "./NavLinks/NavLinksFooter";


function MenuFooter() {
  return (
    <div className="MenuFooter">
      <div className="MenuLinks">
        <h1>Меню</h1>
        <NavLinksFooter/>
      </div>
      <div className="RepairLinks">
        <h1>Ремонтируем</h1>
        <RepairLinks/>
      </div>
      <div className="ContactsLinks">
        <h1>Контакты</h1>
        <ContactsList/>
      </div>
    </div>
  )
}
function MenuFooterMobile() {
  return (
    <div className="MenuFooterMobile">
      <PanelGroup accordion>
        <Panel header="Меню" defaultExpanded>
          <NavLinksFooter/>
        </Panel>
        <Panel header="Ремонтируем">
          <RepairLinks/>
        </Panel>
        <Panel header="Контакты">
          <ContactsList/>
        </Panel>
      </PanelGroup>
    </div>
  )
}


export {MenuFooter,MenuFooterMobile};