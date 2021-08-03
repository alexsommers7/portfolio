<template>
  <section class="track resume full-width" data-section="Resume">
    <span class="anchor-span" id="resume"></span>
    <h3 class="heading heading--3 hide-for-large">RESUME</h3>
    <h4 class="heading heading--4 heading--section">Digital Marketing to Web Development</h4>
    <div class="resume__content">
      <div>
        <h5 class="resume__heading"><strong>Experience</strong></h5>
        <ul class="gsap-ul">
          <li v-for="job in jobs" :key="job.id">
            <h5 class="title">{{ job.jobTitle }}</h5>
            <p class="company">{{ job.company }} | {{ job.location }}</p>
            <p class="timeframe">
              <em>{{ job.timeframe }}</em>
            </p>
            <p class="description">{{ job.description }}</p>
          </li>
        </ul>
      </div>
      <div>
        <h5 class="resume__heading"><strong>Education</strong></h5>
        <ul class="gsap-ul">
          <li v-for="school in schooling" :key="school.id">
            <h5 class="title">{{ school.title }}</h5>
            <p class="company">{{ school.company }} | {{ school.location }}</p>
            <p class="timeframe">
              <em>{{ school.timeframe }}</em>
            </p>
            <p class="description">{{ school.description }}</p>
          </li>
          <li class="gsap-li" style="transition-delay: .6s">
            <a
              href="https://onedrive.live.com/embed?cid=3A9F6FC30DCB1820&resid=3A9F6FC30DCB1820%21221295&authkey=AFmyQ-Yn9i6Bynw&em=2"
              target="_blank"
              rel="noopener"
              class="btn btn--primary"
              >Download Full Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Resume",
  data() {
    return {
      jobs: [
        {
          id: 1,
          jobTitle: "Front-End Web Developer",
          company: "Retailer Web Services",
          location: "Scottsdale, AZ",
          timeframe: "April 2021 - Present",
          description:
            "Work with Vue.js, Alpine.js, JavaScript (ES6), CSS, and HTML to build, maintain, and continually improve large scale, internal web platforms as a member of a scrum team.",
        },
        {
          id: 2,
          jobTitle: "Freelance Web Developer",
          company: "Self-Employed",
          location: "Tempe, AZ",
          timeframe: "July 2020 - Present",
          description:
            "Work with small business owners to conceptualize, design, and develop static websites. Deploy and maintain sites via GitHub repositories and Netlify continuous integration.",
        },
        {
          id: 3,
          jobTitle: "Digital Marketing Coordinator",
          company: "Isagenix",
          location: "Gilbert, AZ",
          timeframe: "September 2019 - April 2021",
          description:
            "Built contemporary, interactive webpages in Sitecore and Salesforce Marketing Cloud with an emphasis on JavaScript, Marketing Cloud Ampscript, CSS, and semantic HTML.",
        },
      ],
      schooling: [
        {
          id: 1,
          title: "B.A. - Marketing",
          company: "Baldwin Wallace University",
          location: "Berea, OH",
          timeframe: "August 2013 - May 2017",
          description: "Magna cum laude",
        },
      ],
    };
  },
  mounted() {
    // ScrollTrigger.defaults({
    //   markers: true,
    // });

    const items = this.$el.querySelectorAll(".gsap-ul");
    items.forEach((item) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 55%",
        onEnter: (self) => self.trigger.classList.add("active"),
      });

      ScrollTrigger.create({
        trigger: item,
        start: "top bottom",
        onLeaveBack: (self) => self.trigger.classList.remove("active"),
      });
    });
  },
};
</script>

<style scoped lang="scss">
@import "../../../scss/_mixins";
@import "../../../scss/_variables";

.resume {
  @include respond(desk-small) {
    margin-top: 2rem;
  }

  &__content {
    max-width: 1800px;
    margin: 2rem auto 0 auto;

    @include respond(tab-land) {
      margin-top: 4rem;
      display: grid;
      grid-template-columns: repeat(2, minmax(400px, 45%));
      grid-gap: 2rem;
      justify-content: flex-end; // assumes education section doesn't have as much content
      justify-items: center;
    }

    ul {
      list-style: none;

      li {
        position: relative;
        padding: 0 5px 0 44px;
        margin-bottom: 3.5rem;

        &::before,
        &::after {
          content: "";
          position: absolute;
        }

        &::before {
          background: $color-background;
          width: 20px;
          height: 20px;
          left: 0px;
          top: 6px;
          border-radius: 50%;
          border: 2px solid $color-primary;
          z-index: 20;
          transform: scale(0);
          transform-origin: center center;
        }

        &:not(:last-of-type)::after,
        &:first-of-type::after {
          width: 2px;
          height: calc(100% + 3.5rem); // add li margin-bottom
          left: 9px;
          top: 12px;
          z-index: 10;
          background: $color-primary;
          transform: scaleY(0);
          transform-origin: center top;
        }

        .title,
        .company {
          line-height: 1.2;
        }

        .title {
          color: $color-primary;
          font-size: 1.8rem;
        }

        .company {
          font-size: 1.25rem;
          margin-bottom: 0;
        }

        .timeframe {
          margin-bottom: 0.5rem;

          &::after {
            content: "";
            width: 4rem;
            height: 2px;
            display: block;
            padding: 0.3rem 0;
            border-bottom: 2px solid $color-primary;
          }
        }

        .btn {
          width: auto;
        }
      }

      &.active {
        // only need to edit these 2 variables to adjust timing
        $before-interval: 0.3;
        $after-interval: 1;

        li {
          &::before {
            transition: transform ($before-interval + 0s) cubic-bezier(0.34, 1.56, 0.62, 1.25);
            transform: scale(1);
          }

          &::after {
            transition: transform ($after-interval + 0s);
            transform: scaleY(1);
          }

          &:first-child::after {
            transition-delay: ($before-interval + 0s);
          }

          &:nth-child(2) {
            &::before {
              transition-delay: ($before-interval + $after-interval + 0s);
            }
            &::after {
              transition-delay: (($before-interval * 2) + $after-interval + 0s);
            }
          }

          &:nth-child(3) {
            &::before {
              transition-delay: (($before-interval * 2) + ($after-interval * 2) + 0s);
            }
            &::after {
              transition-delay: (($before-interval * 3) + ($after-interval * 2) + 0s);
            }
          }
        }
      }
    }
  }

  &__heading {
    font-size: 2rem;
    margin: 2rem auto 1rem;

    @include respond(desk-small) {
      margin: 1rem auto;
    }
  }
}
</style>
