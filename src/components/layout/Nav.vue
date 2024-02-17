<script>
  const navListItems = [
    {
      name: 'About',
      path: '/',
      section: 'about',
    },
    {
      name: 'Projects',
      path: '/',
      section: 'projects',
    },
    {
      name: 'Resume',
      path: '/',
      section: 'resume',
    },
    {
      name: 'Contact',
      path: '/',
      section: 'contact',
    },
  ];
</script>

<script setup>
  import { ref, inject } from 'vue';
  import useNav from '@/composables/useNav.js';

  const onMobile = inject('onMobile');

  const navEl = ref(null);
  const { navIsOpen, toggleNav } = useNav(navEl);
</script>

<template>
  <header>
    <nav
      class="navigation"
      :class="{ open: navIsOpen, isDesktop: !onMobile }"
      aria-label="Site Navigation"
      ref="navEl"
    >
      <a class="skip-link" href="#main">Skip to content</a>

      <button
        class="navigation__toggle tab-focus"
        aria-label="Toggle Navigation"
        @click="toggleNav"
      >
        <span class="navigation__hamburger navigation__hamburger--1"></span>
        <span class="navigation__hamburger navigation__hamburger--2"></span>
        <span class="navigation__hamburger navigation__hamburger--3"></span>
      </button>

      <ul class="navigation__list" @click="toggleNav">
        <li v-for="item in navListItems" :key="item.name">
          <a :href="`#${item.section}`" class="btn">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  a.skip-link {
    background: $color-primary;
    color: $color-text-dark;
    font-weight: 700;
    width: 100%;
    text-align: center;
    left: 50%;
    top: 0;
    padding: 0.15rem;
    position: absolute;
    opacity: 0;
    transform: translate(-50%, -200%);
    transition: all 0.3s;

    &:focus {
      transform: translate(-50%, 0%);
      opacity: 1;
    }
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--nav-mobile-height);
    z-index: 50;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15);

    @include respond(desk-small) {
      height: 100vh;
      width: var(--nav-desktop-width);
      box-shadow: none;
    }
  }

  .navigation {
    width: 100%;
    height: 100%;
    background-color: $color-background-light;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
    transition: background-color 0.25s 0.175s ease;
    transform: none;

    @include respond(desk-small) {
      padding: 0 0.5rem;
      justify-content: center;
    }

    &.isDesktop {
      width: var(--nav-desktop-width);

      .navigation__list {
        left: -100%;
        top: 0;
      }

      &.open {
        .navigation__list {
          left: var(--nav-desktop-width);
        }
      }
    }

    &:not(.isDesktop) {
      .navigation__list {
        top: -100%;
        left: 0;
      }

      &.open {
        .navigation__list {
          top: 0;
        }
      }
    }

    &.open {
      background-color: $color-background;

      .navigation__list {
        visibility: visible;
        opacity: 1;

        li {
          opacity: 1;
        }
      }

      .navigation__hamburger {
        &--2 {
          transform: translateX(200%);
          opacity: 0;

          @include respond(desk-small) {
            transform: translateX(-300%);
          }
        }

        &--1,
        &--3 {
          width: 100%;
          top: 50%;
        }

        &--1 {
          transform: rotate(495deg);
        }

        &--3 {
          transform: rotate(-135deg);
        }
      }
    }

    &__toggle {
      margin-right: 3px;
      position: relative;
      appearance: none;
      border: none;
      width: 3.5rem;
      height: 3.5rem;
      background-color: transparent;
      cursor: pointer;

      @include respond(desk-small) {
        width: 80%;
        margin-right: 0;
      }

      @include hover {
        &:hover {
          .navigation__hamburger {
            width: 100%;
          }
        }
      }
    }

    &__hamburger {
      transition:
        transform 0.8s cubic-bezier(0.06, 1.285, 0.195, 0.985),
        width 0.3s;
      position: absolute;
      height: 2px;
      background-color: $color-primary;

      &--2 {
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &--1,
      &--3 {
        width: 40%;
      }

      &--1 {
        top: 25%;
        left: 0;
      }

      &--3 {
        bottom: 25%;
        right: 0;
      }
    }

    &__list {
      opacity: 0;
      visibility: hidden;
      position: fixed;
      top: -100%;
      left: 0;
      height: 100%;
      overflow-y: auto;
      width: 100vw;
      list-style: none;
      z-index: 40;
      background-color: $color-background-light;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      align-content: center;
      justify-content: center;
      text-align: center;
      z-index: -1;
      font-weight: 700;
      transition: all 0.15s;

      @include respond(desk-small) {
        top: 0;
        left: var(--nav-desktop-width);
        height: 100vh;
        width: calc(100% - (var(--nav-desktop-width) * 2));
        flex-direction: column;
        flex-wrap: nowrap;
      }

      li {
        flex: 0 0 75%;
        margin: 1rem auto;
        font-size: 2.5rem;
        opacity: 0;
        background-color: $color-background;
        border-bottom: 2px solid $color-primary;
        transition: transform 0.3s;

        @include respond(desk-small) {
          flex-basis: auto;
          font-size: 3.5rem;
          width: 30%;
        }

        @include respond(desk-medium) {
          margin: 2rem auto;
        }

        @media all and (max-height: 550px) {
          flex: 0 0 43%;
        }

        &:hover {
          transform: translateX(1rem);
          border-bottom: 2px solid transparent;

          @include respond(desk-small) {
            transform: translate(0.75rem, 0);
          }
        }

        button,
        .btn {
          padding: 0.5rem 1rem;
          text-decoration: none;
          color: $color-text-light;
          border: none;
          font-size: inherit;
          width: 100%;
          height: 100%;
          display: inline-block;
          background-image: linear-gradient(
            120deg,
            transparent 0%,
            transparent 50%,
            $color-primary 50%
          );
          background-size: 230%;
          background-color: transparent;
          transition: all 0.5s;

          &:hover,
          &:active {
            background-position: 100%;
            color: $color-text-dark;
          }
        }
      }
    }
  }
</style>
