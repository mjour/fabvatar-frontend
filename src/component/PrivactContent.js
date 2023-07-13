import React from "react";
import { makeStyles, Box, Typography, Container } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  UnorderList: {
    padding: "20px !important",
    marginTop: "-10px",
    marginBottom: "0px",
  },
  mainBox: {
    padding: "30px",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 0px",
    },
  },
  content1: {
    marginTop: "20px",
  },
  content2: {
    marginTop: "10px",
  },
  contentBox: {
    marginTop: "20px",
  },
}));

const PrivactContent = () => {
  const pointData = {
    titte: "asda",
  };
  const classes = useStyles();
  return (
    <Box>
      <Container>
        <Box className={classes.mainBox}>
          <Typography variant="body2">
            This Privacy Policy governs the manner in which Biworld technologies
            collect, use, maintain and disclose information collected from the
            users (each person, one "User") of the website https:biworld.io
            ("Website"). This Privacy Policy applies to the Website and all
            products and services offered by Biworld. You have the right to
            access Biworld websites without telling us who you are and without
            disclosing any information about yourself. However, there are times
            when we need information from you.
          </Typography>
          <Typography variant="body2" className={classes.content1}>
            Biworld does not rent, sell or share personal information about you
            with other people or unaffiliated companies except:
          </Typography>
          <ul type="dot" className={classes.UnorderList}>
            <li>
              <Typography variant="body2">
                To provide the products or services you have requested.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                When we have your permission or in the following cases:
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                We provide information to trusted organizations working on
                behalf of or with Biworld under strict confidentiality
                agreements. These organizations may use your personal
                information to help Biworld communicate with you about offers
                from Biworld and our marketing partners. However, these
                companies do not have any independent rights to share or further
                disseminate this information.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                When we have your permission or in the following cases: We
                respond to subpoenas, court orders or legal process either to
                establish or exercise our legal rights or to defend against
                legal claims.{" "}
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                When we have your permission or in the following cases: We
                respond to subpoenas, court orders or legal process either to
                establish or exercise our legal rights or to defend against
                legal claims. We believe it is necessary to share information to
                investigate, prevent or take action against any illegal
                activity, suspected fraud, situations involving potential
                threats for the physical safety of any person or as otherwise
                required by law.
              </Typography>
            </li>
          </ul>
          <Typography variant="h5">
            Personally Identifiable Information
          </Typography>
          <Typography variant="body2" className={classes.content2}>
            We may collect personally identifiable information from "Users" in a
            variety of ways, including, but not limited to, when a User visits
            our website, contacts us on the website, places order, sign up for a
            newsletter, respond to a survey, fill out a form, and get involved
            with the activities, services, features or other resources we offer
            on our Website. Users may be asked, as appropriate, for their name,
            email address, mailing address and telephone number. However, users
            may access our Website anonymously. We will only collect personally
            identifiable information from Users if they voluntarily submit such
            information to us. information to us.
          </Typography>
          <Box className={classes.contentBox}>
            <Typography variant="h5">Web browser cookies</Typography>
            <Typography variant="body2" className={classes.content2}>
              Our website may use "cookies" to enhance the User experience. A
              user's web browser places cookies on their hard drive for
              record-keeping purposes and sometimes to track information about
              them. Users can choose to set their web browser to refuse cookies
              or to notify you when a cookie is being sent. If they do, be aware
              that some parts of the Site may not function properly.
            </Typography>
          </Box>
          <Box className={classes.contentBox}>
            <Typography variant="h5">
              How we use the information we collect
            </Typography>
            <Typography variant="body2" className={classes.content2}>
              Biworld may collect and use the User's personal information for
              the following purposes:
            </Typography>
            <ul type="dot" className={classes.UnorderList}>
              <li>
                <Typography variant="body2">
                  To improve customer service, the information you provide will
                  help us more effectively respond to your customer service
                  requests and support needs.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  To improve our Website, we may use the feedback you provide to
                  improve our products and services.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  To send periodic emails, we may use email addresses to send
                  Users information and updates regarding their orders. It can
                  also be used to respond to their requests, questions and/or
                  other requests. If a User decides to opt-in to our mailing
                  list, they will receive an email that may include company
                  news, updates, related product or service information, etc. If
                  at any time the User wishes to unsubscribe from future emails,
                  we will include unsubscribe instructions at the bottom of each
                  we will include unsubscribe instructions at the bottom of each
                  email.
                </Typography>
              </li>
            </ul>
          </Box>
          <Box className={classes.contentBox}>
            <Typography variant="h5">
              Personally Identifiable Information
            </Typography>
            <Typography variant="body2" className={classes.content2}>
              Our website may use "cookies" to enhance the User experience. A
              user's web browser places cookies on their hard drive for
              record-keeping purposes and sometimes to track information about
              them. Users can choose to set their web browser to refuse cookies
              or to notify you when a cookie is being sent. If they do, be aware
              that some parts of the Site may not function properly.We may
              collect personally identifiable information from "Users" in a
              variety of ways, including, but not limited to, when a User visits
              our website, contacts us on the website, places order, sign up for
              a newsletter, respond to a survey, fill out a form, and get
              involved with the activities, services, features or other
              resources we offer on our Website. Users may be asked, as
              appropriate, for their name, email address, mailing address and
              telephone number. However, users may access our Website
              anonymously. We will only collect personally identifiable
              information from Users if they voluntarily submit such information
              to us.
            </Typography>
          </Box>
          <Box className={classes.contentBox}>
            <Typography variant="h5">Web browser cookies</Typography>
            <Typography variant="body2" className={classes.content2}>
              Our website may use "cookies" to enhance the User experience. A
              user's web browser places cookies on their hard drive for
              record-keeping purposes and sometimes to track information about
              them. Users can choose to set their web browser to refuse cookies
              or to notify you when a cookie is being sent. If they do, be aware
              that some parts of the Site may not function properly.
            </Typography>
          </Box>
          <Box className={classes.contentBox}>
            <Typography variant="h5">
              How we use the information we collect
            </Typography>
            <ul type="dot" className={classes.UnorderList}>
              <li>
                <Typography variant="body2">
                  Biworld may collect and use the User's personal information
                  for the following purposes:
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  To improve customer service, the information you provide will
                  help us more effectively respond to your customer service
                  requests and support needs.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  To improve our Website, we may use the feedback you provide to
                  improve our products and services.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  To send periodic emails, we may use email addresses to send
                  Users information and updates regarding their orders. It can
                  also be used to respond to their requests, questions and/or
                  other requests. If a User decides to opt-in to our mailing
                  list, they will receive an email that may include company
                  news, updates, related product or service information, etc. If
                  at any time the User wishes to unsubscribe from future emails,
                  we will include unsubscribe instructions at the bottom of each
                  email.
                </Typography>
              </li>
            </ul>
          </Box>
          <Box className={classes.contentBox}>
            <Typography variant="h5">
              How we protect your information
            </Typography>
            <Typography variant="body2" className={classes.content2}>
              We put in place appropriate data collection, storage and
              processing practices and security measures to protect against
              unauthorized access, alteration, disclose or destroy personal
              information, usernames, passwords, transaction information and
              data stored on your Website. The exchange of sensitive and private
              data between the Website and its Users takes place over an SSL
              secured communication channel and is encrypted and protected with
              a digital signature. Our website also complies with PCI
              vulnerability standards to create the safest possible environment
              for Users.
            </Typography>
          </Box>
          <Box className={classes.contentBox}>
            <Typography variant="h5">
              Share your personal information
            </Typography>
            <Typography variant="body2" className={classes.content2}>
              We do not sell, trade or rent users' personally identifiable
              information to others. We may share general aggregate demographic
              information that is not linked to any personally identifiable
              information regarding visitors and users with our business
              partners, branches, trusted advertiser for the above purposes.
            </Typography>
          </Box>
          <Box className={classes.contentBox}>
            <Typography variant="h5">Links to non-Biworld websites</Typography>
            <Typography variant="body2" className={classes.content2}>
              Biworld may provide links to third party websites for your
              convenience and information. If you access such links through the
              Biworld website, you will leave the Biworld website. Biworld does
              not control such websites or their security practices, which may
              differ from Biworld's practices.We do not endorse or make any
              representations about third party websites. Personal data that you
              choose to provide or collect by these third parties, including any
              social media sites featured on our website, is not covered by
              Biworld's Privacy Policy. We encourage you to review the privacy
              policy of any website before submitting your personal information.
              We may also provide social media features on our website that
              allow you to share Biworld information with your social networks
              and interact with Biworld on various social media sites. Your use
              of these features may result in the collection or sharing of
              information about you, depending on the features. We encourage you
              to review the privacy policies and settings on the social media
              sites you interact with to ensure that you understand the
              information that may be shared by those sites.
            </Typography>
          </Box>
          <Box className={classes.contentBox}>
            <Typography variant="h5">
              Comply with the Children's Online Privacy Protection Act
            </Typography>
            <Typography variant="body2" className={classes.content2}>
              Protecting the privacy of young children is especially important.
              For that reason, we never collect or maintain information on our
              Website from people we actually know are under the age of 13 and
              no part of our website is structured to attract anyone under the
              age of 13.
            </Typography>
          </Box>
          <Box className={classes.contentBox}>
            <Typography variant="h5">Changes to this privacy policy</Typography>
            <Typography variant="body2" className={classes.content2}>
              Biworld reserves the right to update this privacy policy at any
              time. We will post any Policy changes on this page and, if those
              changes are material, we will provide a more prominent notice
              (including, for some services, notification via email about Policy
              changes).We will also keep previous versions of this Policy in an
              archive for your review. We encourage Users to regularly check
              this page for any changes to stay updated on how we are helping to
              protect the personal information we collect. You acknowledge and
              agree that it is your responsibility to periodically review this
              privacy policy and be aware of amendments.
            </Typography>
          </Box>
          <Box className={classes.contentBox}>
            <Typography variant="h5">Your acceptance of these terms</Typography>
            <Typography variant="body2" className={classes.content2}>
              By using this Website, you mean that you accept this policy. If
              you do not agree with this policy, please do not use our Website.
              Your continued use of the Website after posting changes to this
              policy will be deemed your acceptance of such changes.
            </Typography>
          </Box>
          <Box className={classes.contentBox}>
            <Typography variant="h5">
              Your acceptance of theContact us
            </Typography>
            <Typography variant="body2" className={classes.content2}>
              If you have any questions about this Privacy Policy, the
              operations of this website, or your transactions with this
              website, please contact us at: contact@biworld.io
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivactContent;
