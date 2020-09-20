import React from 'react'
import {SidebarMenu} from 'components'

import wallet from 'images/menuIcons/wallet.svg'
import tasting from 'images/menuIcons/tasting.svg'
import news from 'images/menuIcons/news.svg'
import profile from 'images/menuIcons/profile.svg'
import training from 'images/menuIcons/training.svg'
import team from 'images/menuIcons/team.svg'
import personal from 'images/menuIcons/personal.svg'
import community from 'images/menuIcons/community.svg'
import reports from 'images/menuIcons/reports.svg'
import business from 'images/menuIcons/business.svg'
import events from 'images/menuIcons/events.svg'
import brand from 'images/menuIcons/brand.svg'
import wine from 'images/menuIcons/wine.svg'
import broadcast from 'images/menuIcons/broadcast.svg'
import brandActive from 'images/menuIcons/brandActive.svg'
import wineActive from 'images/menuIcons/wineActive.svg'
import broadcastActive from 'images/menuIcons/broadcastActive.svg'
import eventsActive from 'images/menuIcons/eventsActive.svg'
import businessActive from 'images/menuIcons/businessActive.svg'
import reportsActive from 'images/menuIcons/reportsActive.svg'
import communityActive from 'images/menuIcons/communityActive.svg'
import personalActive from 'images/menuIcons/personalActive.svg'
import teamActive from 'images/menuIcons/teamActive.svg'
import trainingActive from 'images/menuIcons/trainingActive.svg'
import profileActive from 'images/menuIcons/profileActive.svg'
import newConsultant from 'images/menuIcons/newConsultant.svg'
import newConsultantActive from 'images/menuIcons/newConsultantActive.svg'
import walletActive from 'images/menuIcons/walletActive.svg'
import tastingActive from 'images/menuIcons/tastingActive.svg'
import newsActive from 'images/menuIcons/newsActive.svg'

const ConsultantSidebar = () => {
  return (
    <SidebarMenu className="">
      <SidebarMenu.Item
        icon={<img src={news} alt="" />}
        activeIcon={<img src={newsActive} alt="" />}
        title="News & Updates">
        <SidebarMenu.Item
          title="Pouring at Public Events"
          to="/consultant-portal/news-updates/pouring-public-events"
        />
        <SidebarMenu.Item
          title="Sky Wallet Transfer FAQs"
          to="/consultant-portal/news-updates/sky-wallet-transfer"
        />
        <SidebarMenu.Item
          title="Field Communication"
          to="/consultant-portal/news-updates/field-communication"
        />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={personal} alt="" />}
        activeIcon={<img src={personalActive} alt="" />}
        title="Knowledge Center"
        to="/consultant-portal/knowledge-center"
      />
      <SidebarMenu.Item
        icon={<img src={newConsultant} alt="" />}
        activeIcon={<img src={newConsultantActive} alt="" />}
        title="New Consultants Start Here">
        <SidebarMenu.Item
          title="5 steps to Lunch Your Business"
          to="/consultant-portal/new-consultants/steps"
        />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={training} alt="" />}
        activeIcon={<img src={trainingActive} alt="" />}
        title="Training and Resources">
        <SidebarMenu.Item
          title="Scout School Online"
          to="/consultant-portal/training-and-resources/scout-school-online"
        />
        <SidebarMenu.Item
          title="Webinar Trainings"
          to="/consultant-portal/training-and-resources/webinar-training"
        />
        <SidebarMenu.Item
          title="Commit 2 Success "
          to="/consultant-portal/training-and-resources/commit-success"
        />
        <SidebarMenu.Item
          title="Dough CRM"
          to="/consultant-portal/training-and-resources/dough-crm"
        />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={team} alt="" />}
        activeIcon={<img src={teamActive} alt="" />}
        title="Team">
        <SidebarMenu.Item title="Team Center" to="/team/teamcenter" exact />
        <SidebarMenu.Item title="Graphical Downline" to="/team/graphicaldownline" exact />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={profile} alt="" />}
        activeIcon={<img src={profileActive} alt="" />}
        title="Profile">
        <SidebarMenu.Item title="Edit Contact Info" to="/consultant-portal/edit-contact-info" />
        <SidebarMenu.Item title="Edit Website Profile" to="/consultant-portal/edit-profile" />
        <SidebarMenu.Item title="Payment Methods" to="/consultant-portal/payment-information" />
        <SidebarMenu.Item title="Shipping Information" to="/consultant-portal/shipping-addresses" />
        <SidebarMenu.Item title="My Skye Wallet" to="/consultant-portal/manage-sky-wallet" />
        <SidebarMenu.Item title="My Notes" to="/consultant-portal/notes" />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={personal} alt="" />}
        activeIcon={<img src={personalActive} alt="" />}
        title="Personal Orders">
        <SidebarMenu.Item title="Add New Personal Order" to="add-new-personal-order" />
        <SidebarMenu.Item title="Track My Orders" to="track-my-orders" />
        <SidebarMenu.Item title="Manage Wine Club Membership" to="manage-wine-club-membership" />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={personal} alt="" />}
        activeIcon={<img src={personalActive} alt="" />}
        title="Customers">
        <SidebarMenu.Item title="Customer Center" to="customer-center" />
        <SidebarMenu.Item title="Add a Customer" to="add-customer" />
        <SidebarMenu.Item title="My Customer Orders" to="my-customer-orders" />
        <SidebarMenu.Item title="Add New Customer Wine Order" to="add-new-customer-wine-order" />
        <SidebarMenu.Item title="Customer Contact List" to="customer-contact-list" />
        <SidebarMenu.Item title="Customer Memberships" to="customer-memberships" />
        <SidebarMenu.Item title="Leads">
          <SidebarMenu.Item title="Building a Team" to="building-team" />
          <SidebarMenu.Item title="Lead Center" to="lead-center" />
          <SidebarMenu.Item title="Add a Lead" to="add-lead" />
        </SidebarMenu.Item>
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={tasting} alt="" />}
        activeIcon={<img src={tastingActive} alt="" />}
        title="Tastings">
        <SidebarMenu.Item title="Tasting Manager" to="/consultant-portal/tasting/tasting-manager" />
        <SidebarMenu.Item title="Tasting Rewards">
          <SidebarMenu.Item title="Tasting Reward FAQs" to="tasting-reward-FAQs" />
          <SidebarMenu.Item title="Tasting Reward Selections" to="tasting-reward-selections" />
        </SidebarMenu.Item>
        <SidebarMenu.Item title="Wine Tasting Basics" to="wine-tasting-basics" />
        <SidebarMenu.Item title="Invitation Templates">
          <SidebarMenu.Item title="Invitation Template 1" to="invitation-template1" />
          <SidebarMenu.Item title="Invitation Template 2" to="invitation-template2" />
        </SidebarMenu.Item>
        <SidebarMenu.Item title="Tasting Tools" to="/consultant-portal/tasting/tasting-tools">
          {/* <SidebarMenu.Item title="Tasting Form" to="tasting-form" />
          <SidebarMenu.Item title="The Wine List" to="wine-list" />
          <SidebarMenu.Item title="Tasting Companion Form" to="tasting-companion-form" />
          <SidebarMenu.Item title="Tasting Tool How-To's" to="tasting-tool-how-to" />
          <SidebarMenu.Item title="Tasting Cards" to="tasting-cards" /> */}
        </SidebarMenu.Item>
        <SidebarMenu.Item title="Virtual Tastings" to="virtual-tastings" />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={wallet} alt="" />}
        activeIcon={<img src={walletActive} alt="" />}
        title="Compensation">
        <SidebarMenu.Item title="View Compensation" to="/compensation/view-compensation" />
        <SidebarMenu.Item title="View Earning" to="/compensation/view-earning" />
        <SidebarMenu.Item title="Link to Hyperwallet" to="/compensation/link-to-hyperwallet" />
        <SidebarMenu.Item
          title="Compensation Plan Summary"
          to="/consultant-portal/compensation/compensation-plan-summary"
        />
        <SidebarMenu.Item
          title="2020 Compensation Plan FAQs"
          to="/consultant-portal/compensation/compensation-plan"
        />
        <SidebarMenu.Item
          title="How to Cash in with Scout Account!"
          to="/compensation/how-to-cash"
        />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={community} alt="" />}
        activeIcon={<img src={communityActive} alt="" />}
        title="Community Building">
        <SidebarMenu.Item
          title="Opportunity Assets"
          to="/consultant-portal/community-building/opportunity-assets"
        />
        <SidebarMenu.Item
          title="Fast Start 2 Success FAQs"
          to="/consultant-portal/community-building/fast-start-success"
        />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={reports} alt="" />}
        activeIcon={<img src={reportsActive} alt="" />}
        title="Reports">
        <SidebarMenu.Item title="Downlines" to="/consultant-portal/reports/downlines" />
        <SidebarMenu.Item
          title="Downlines History"
          to="/consultant-portal/reports/downlines-history"
        />
        <SidebarMenu.Item title="Orders" to="/consultant-portal/reports/orders" />
        <SidebarMenu.Item
          title="Customer Sales by Product"
          to="/consultant-portal/reports/customer-sales"
        />
        <SidebarMenu.Item title="Inventory" to="/consultant-portal/reports/inventory" />
        <SidebarMenu.Item
          title="Consultants Close To NEWGENQ"
          to="/consultant-portal/reports/consultants-close-to-newgenq"
        />
        <SidebarMenu.Item title="NEWGENQ" to="/consultant-portal/reports/newgenq" />
        <SidebarMenu.Item
          title="Cellar Star Recognition Program"
          to="/consultant-portal/reports/cellar-star-recognition-program"
        />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={business} alt="" />}
        activeIcon={<img src={businessActive} alt="" />}
        title="Business Files">
        <SidebarMenu.Item
          title="Policies & Procedures"
          to="/consultant-portal/business-files/policies-procedures"
        />
        <SidebarMenu.Item
          title="Personal Website Renewals"
          to="/consultant-portal/business-files/personal-website-renewals"
        />
        <SidebarMenu.Item title="W9 Form" to="/consultant-portal/business-files/w9-form" />
        <SidebarMenu.Item
          title="Business Entity Registration Form"
          to="/consultant-portal/business-files/business-entity-registration-form"
        />
        <SidebarMenu.Item
          title="Terms of Use"
          to="/consultant-portal/business-files/terms-of-use"
        />
        <SidebarMenu.Item
          title="Wine Law FAQs"
          to="/consultant-portal/business-files/wine-law-faqs"
        />
        <SidebarMenu.Item
          title="Current Shipping Rates"
          to="/consultant-portal/business-files/current-shipping-rates"
        />
        <SidebarMenu.Item
          title="Consultant Agreement"
          to="/consultant-portal/business-files/consultant-agreement"
        />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={events} alt="" />}
        activeIcon={<img src={eventsActive} alt="" />}
        title="Events Calendar"
        to="/consultant-portal/events-calendar"
      />
      <SidebarMenu.Item
        icon={<img src={brand} alt="" />}
        activeIcon={<img src={brandActive} alt="" />}
        title="Brand & Marketing">
        <SidebarMenu.Item
          title="Brand Guidelines"
          to="/consultant-portal/brand-marketing/brand-guidelines"
        />
        <SidebarMenu.Item
          title="Submit a Ticket to Brand Stanford"
          to="/consultant-portal/brand-marketing/submit-ticket-brand"
        />
        <SidebarMenu.Item
          title="Wine Consultant Logo"
          to="/consultant-portal/brand-marketing/wine-consultant-logo"
        />
        <SidebarMenu.Item title="Social Media Assets">
          <SidebarMenu.Item title="Facebook Cover Photos">
            <SidebarMenu.Item
              title="Facebook Cover Photos 1"
              to="/consultant-portal/brand-marketing/social-media-assets/facebook-cover-photos/facebook-cover-photo1"
            />
            <SidebarMenu.Item
              title="Facebook Cover Photos 2"
              to="/consultant-portal/brand-marketing/social-media-assets/facebook-cover-photos/facebook-cover-photo2"
            />
            <SidebarMenu.Item
              title="Facebook Cover Photos 3"
              to="/consultant-portal/brand-marketing/social-media-assets/facebook-cover-photos/facebook-cover-photo3"
            />
          </SidebarMenu.Item>
          <SidebarMenu.Item
            title="Social Media Images"
            to="/consultant-portal/brand-marketing/social-media-assets/social-media-images"
          />
          <SidebarMenu.Item title="Career Title Badges">
            <SidebarMenu.Item
              title="Social Badge - Senior Consultant"
              to="/consultant-portal/brand-marketing/social-media-assets/career-title-badges/social-badge-senior-consultant"
            />
          </SidebarMenu.Item>
        </SidebarMenu.Item>
        <SidebarMenu.Item title="Approved Fonts(Google)">
          <SidebarMenu.Item
            title="Noto Serif TC (Google Font)"
            to="/consultant-portal/brand-marketing/approved-fonts/noto-serif"
          />
          <SidebarMenu.Item
            title="Oswald (Google Font)"
            to="/consultant-portal/brand-marketing/approved-fonts/oswald"
          />
        </SidebarMenu.Item>
        <SidebarMenu.Item
          title="FedEx Office Print Center"
          to="/consultant-portal/brand-marketing/fedEx-office-print-center"
        />
        <SidebarMenu.Item title="Infographics">
          <SidebarMenu.Item
            title="Brand Card"
            to="/consultant-portal/brand-marketing/infographics/brand-card"
          />
          <SidebarMenu.Item
            title="What's Really In Your Wine? (Printable PDF)"
            to="/consultant-portal/brand-marketing/infographics/what's-really-in-your-wine"
          />
          <SidebarMenu.Item
            title="Consultants By State Map (PDF)"
            to="/consultant-portal/brand-marketing/infographics/consultants-by-state-map"
          />
          <SidebarMenu.Item
            title="Clean-Crafted Infographic"
            to="/consultant-portal/brand-marketing/infographics/clean-crafted-infographic"
          />
          <SidebarMenu.Item
            title="Clean-Crafted by the Numbers"
            to="/consultant-portal/brand-marketing/infographics/clean-crafted-by-the-numbers"
          />
        </SidebarMenu.Item>
        <SidebarMenu.Item title="Blog Buttons" to="/consultant-portal/blog-buttons" />
        <SidebarMenu.Item
          title="Do The Right Thing Guarantee"
          to="/consultant-portal/do-the-right-thing-guarantee"
        />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={wine} alt="" />}
        activeIcon={<img src={wineActive} alt="" />}
        title="The Wine">
        <SidebarMenu.Item
          title="Wine Style description"
          to="/consultant-portal/the-wine/wine-style-description"
        />
        <SidebarMenu.Item
          title="Wine Wellness FAQs"
          to="/consultant-portal/the-wine/wine-wellness-faqs"
        />
        <SidebarMenu.Item
          title="Wine Classification Chart"
          to="/consultant-portal/the-wine/wine-classification-chart"
        />
        <SidebarMenu.Item
          title="Glossary of Wine Words"
          to="/consultant-portal/the-wine/glossary-wine-words"
        />
        <SidebarMenu.Item
          title="Videos with Wine Tasting Notes from Sarah"
          to="/consultant-portal/the-wine/videos-wine-tasting"
        />
      </SidebarMenu.Item>
      <SidebarMenu.Item
        icon={<img src={broadcast} alt="" />}
        activeIcon={<img src={broadcastActive} alt="" />}
        title="Broadcast Messages"
        to="/consultant-portal/broadcast-messages"
      />
    </SidebarMenu>
  )
}

export default ConsultantSidebar
