<template>
  <footer class="flex-center">
    <div class="hide-for-large icons">
      <a
        href="https://github.com/alexsommers7"
        target="_blank"
        rel="noopener"
        aria-label="Link to Github Profile"
      >
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
        >
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
      </a>
      <a
        href="https://www.linkedin.com/in/alex-sommers-15561a10a/"
        target="_blank"
        rel="noopener"
        aria-label="Link to LinkedIn Profile"
      >
        <svg
          version="1.1"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
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
      </a>
      <a :href="resumeLink" aria-label="Link to Download Resume" target="_blank" rel="noopener">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="resume--footer"
          viewBox="0 0 24 24"
          class="icon-document"
        >
          <path
            class="primary"
            d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2z"
          />
          <polygon class="secondary" points="14 2 20 8 14 8" />
        </svg>
      </a>
    </div>
    <p>© Alex Sommers {{ currentYear }}. All Rights Reserved.</p>
  </footer>
</template>

<script>
import { resumeLink } from '@/utils/data/jobs';

export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      resumeLink,
    };
  },
};
</script>

<style scoped lang="scss">
footer {
  background-color: $color-background-light;
  flex-wrap: wrap;
  padding: 1rem;

  p {
    flex: 0 0 100%;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 0;
  }
}
.icons {
  display: flex;
}
svg {
  width: 2rem;
  height: 2rem;
  fill: $color-primary;
  margin: 0.25rem 0.75rem 0.5rem;
  transition: fill 0.2s;

  &:hover {
    fill: rgba($color-primary, 0.8);
  }

  &#resume--footer {
    // adjust slightly to vertically center
    margin-top: 0.35rem;
  }
}
</style>
