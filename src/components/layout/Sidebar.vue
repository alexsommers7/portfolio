<template>
  <aside class="sidebar">
    <div class="mail">
      <a href="mailto:alex@alexsommers.com" class="flex-center" aria-label="Send Email to Alex Sommers"
        ><svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;">
          <g>
            <g>
              <path
                d="M507.49,101.721L352.211,256L507.49,410.279c2.807-5.867,4.51-12.353,4.51-19.279V121
			C512,114.073,510.297,107.588,507.49,101.721z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M467,76H45c-6.927,0-13.412,1.703-19.279,4.51l198.463,197.463c17.548,17.548,46.084,17.548,63.632,0L486.279,80.51
			C480.412,77.703,473.927,76,467,76z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M4.51,101.721C1.703,107.588,0,114.073,0,121v270c0,6.927,1.703,13.413,4.51,19.279L159.789,256L4.51,101.721z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M331,277.211l-21.973,21.973c-29.239,29.239-76.816,29.239-106.055,0L181,277.211L25.721,431.49
			C31.588,434.297,38.073,436,45,436h422c6.927,0,13.412-1.703,19.279-4.51L331,277.211z"
              />
            </g>
          </g>
        </svg>
        <p>Email</p>
      </a>
    </div>
    <div class="social">
      <a href="https://github.com/alexsommers7" target="_blank" rel="noopener" aria-label="Link to Github Profile">
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512" id="github" style="enable-background:new 0 0 512 512;">
          <g>
            <g>
              <path
                d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
			c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
			c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
			c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368
			c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68
			c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672
			c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992
			c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496
			c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"
              />
            </g>
          </g>
        </svg>
        <p>Github</p>
      </a>
      <a
        href="https://www.linkedin.com/in/alex-sommers-15561a10a/"
        target="_blank"
        rel="noopener"
        aria-label="Link to LinkedIn Profile"
      >
        <svg version="1.1" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <g>
            <g>
              <rect y="160" width="114.496" height="352" />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M426.368,164.128c-1.216-0.384-2.368-0.8-3.648-1.152c-1.536-0.352-3.072-0.64-4.64-0.896
			c-6.08-1.216-12.736-2.08-20.544-2.08c-66.752,0-109.088,48.544-123.04,67.296V160H160v352h114.496V320
			c0,0,86.528-120.512,123.04-32c0,79.008,0,224,0,224H512V274.464C512,221.28,475.552,176.96,426.368,164.128z"
              />
            </g>
          </g>
          <g>
            <g>
              <circle cx="56" cy="56" r="56" />
            </g>
          </g>
        </svg>
        <p>LinkedIn</p>
      </a>
      <a
        href="https://1drv.ms/b/s!AiAYyw3Db586oM0HV8ltjr73J9OFxQ"
        aria-label="Link to Download Resume"
        target="_blank"
        rel="noopener"
      >
        <svg xmlns="http://www.w3.org/2000/svg" id="resume" viewBox="0 0 24 24" class="icon-document">
          <path class="primary" d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2z" />
          <polygon class="secondary" points="14 2 20 8 14 8" />
        </svg>
        <p>Resume</p>
      </a>
    </div>
    <div class="current-section">
      <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
        <p v-if="!noScrollArrow">
          <button aria-label="Go to Main Content" data-section="about" class="btn" @click="onAnchorClick">
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 54 54" style="enable-background:new 0 0 54 54;">
              <g>
                <path
                  d="M27,0C12.112,0,0,12.112,0,27s12.112,27,27,27s27-12.112,27-27S41.888,0,27,0z M27,52C13.215,52,2,40.785,2,27
		S13.215,2,27,2s25,11.215,25,25S40.785,52,27,52z"
                />
                <path
                  d="M28,38.086V13.5c0-0.553-0.448-1-1-1s-1,0.447-1,1v24.586l-8.293-8.293l-1.414,1.414L27,41.914l10.707-10.707l-1.414-1.414
		L28,38.086z"
                />
              </g>
            </svg>
          </button>
        </p>
        <p v-else>{{ this.$route.name || ' ' }}</p>
      </transition>
    </div>
  </aside>
</template>

<script>
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Sidebar',
  props: {
    observeSections: Boolean,
    observerTargets: Array,
    onMobile: Boolean,
    noScrollArrow: Boolean,
  },
  methods: {
    updateText(triggerObj) {
      let textEl = this.$el.querySelector('.current-section p');
      gsap.to(textEl, {
        duration: 0.75,
        text: {
          value: `${triggerObj.trigger.dataset.sidebar}`,
          padSpace: true,
        },
        ease: 'power1.out',
      });
    },
    configureScrollTrigger() {
      if (!this.observeSections) {
        if (ScrollTrigger.getById('sidebar')) ScrollTrigger.getById('sidebar').kill(true);
        return (this.$el.querySelector('.current-section p').innerText = this.$route.name);
      }

      this.observerTargets.forEach((section) => {
        ScrollTrigger.create({
          id: 'sidebar',
          trigger: section,
          start: 'top 55%',
          end: 'center 20%',
          toggleActions: 'play restart play reverse',
          onEnter: (self) => {
            if (this.observeSections) {
              this.updateText(self);
            }
          },
          onEnterBack: (self) => {
            if (this.observeSections) this.updateText(self);
          },
        });
      });
    },
    onAnchorClick(e) {
      gsap.to(window, {
        duration: 1.2,
        ease: 'expo.inOut',
        scrollTo: `#${e.target.dataset.section}`,
      });
    },
  },
  watch: {
    observerTargets: function(newArr) {
      if (newArr.length && !this.onMobile) {
        this.configureScrollTrigger();
      }
    },
    observeSections: function(newVal) {
      if (!newVal) this.configureScrollTrigger();
    },
    onMobile: function(newVal) {
      if (!newVal) this.configureScrollTrigger();
    },
  },
};
</script>

<style scoped lang="scss">
.no-scroll .sidebar {
  // prevent slight jump when scrollbar goes in/out
  margin-right: var(--scrollbar-width);
}

.sidebar {
  display: none;

  @include respond(desk-small) {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: var(--nav-desktop-width);
    transform: scale(1);
    transform-origin: top;
    height: Max(100vh, 500px); // make sure to capitalize Max or it will run as SCSS function
    background-color: $color-primary;

    .mail,
    .social {
      svg {
        width: 2rem;
        height: 2rem;
        transition: all 0.25s ease;

        @include respond(desk-xlarge) {
          width: 2.5rem;
          height: 2.5rem;
        }
      }

      a {
        position: relative;
        overflow: hidden;

        &:hover {
          overflow: visible;

          svg {
            transform: translateX(200%);
          }

          p {
            opacity: 1;
            visibility: visible;
            transform: translate(-50%, -50%);
          }
        }
      }

      a p {
        font-size: 1.2rem;
        position: absolute;
        color: $color-text-light;
        top: 50%;
        left: 50%;
        opacity: 0;
        visibility: hidden;
        transform: translate(-80%, -50%);
        transition: all 0.25s ease;
      }
    }
  }

  .mail,
  .social {
    background-color: $color-background-light;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0.5rem 0;
    transition: all 0.2s;
  }

  .mail {
    flex-basis: 80px;

    svg {
      fill: $color-text-light;
      margin: 0.5rem;
    }
  }

  .social {
    flex: 0 1 200px;
    border-top: 1px solid $color-text-light;

    @include respond(desk-xlarge) {
      flex-basis: 240px;
    }

    svg {
      fill: $color-primary;
      margin: 0.5rem auto;

      @include respond(desk-xlarge) {
        margin: 0.75rem auto;
      }

      &#github {
        margin-top: 12px; // adjusting for svg not being totally centered
      }

      &#resume {
        margin-top: 18px;
      }
    }
  }

  .current-section {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    p {
      font-size: 3rem;
      font-weight: 700;
      text-transform: uppercase;
      color: $color-background;
      writing-mode: vertical-lr;
      transform: rotate(-180deg);
      padding-right: 5px;
      padding-bottom: 1.25rem;

      @include respond(desk-medium) {
        font-size: 4rem;
      }

      button {
        appearance: none;
        background: transparent;
        border: none;
        cursor: pointer;
        width: 6rem;
        height: 6rem;
        transform: translateY(-10px);

        &:hover {
          svg {
            transform: rotate(180deg);
          }
        }

        svg {
          width: 100%;
          height: 100%;
          pointer-events: none;
          fill: $color-background-light;
          transform: rotate(-180deg);
          transition: transform 0.25s ease;
          // offset 5px padding on container
          // was needed to horizontally center text
          margin-right: -5px;
        }
      }
    }
  }
}

body.no-scroll {
  // nav open state
  .mail,
  .social {
    background-color: $color-background;
  }
}
</style>