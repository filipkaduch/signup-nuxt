import { mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import { beforeEach, describe, test, expect } from 'vitest';
import SuccessCard from '~/components/SuccessCard.vue';
import useSignupFormStore from '~/stores/SignupFormStore';

const id = 'success';

const componentDefaults = {
  props: {
    id,
  },
};

describe('SuccessCard', () => {
  describe('Visibility', () => {
    let component: VueWrapper;

    beforeEach(() => {
      component = mount(SuccessCard, componentDefaults);
    });

    test('Card', () => {
      expect(component.find(`#${id}-card`).isVisible()).toBeTruthy();
    });

    test('Title', () => {
      expect(component.find(`#${id}-title`).isVisible()).toBeTruthy();
    });

    test('Consent text (hidden)', () => {
      expect(component.find(`#${id}-consent`).exists()).toBeFalsy();
    });
  });

  describe('Interactions', () => {
    test('Consent text (visible)', () => {
      useSignupFormStore().newsConsent = true;

      const component = mount(SuccessCard, componentDefaults);

      expect(component.find(`#${id}-consent`).isVisible()).toBeTruthy();
    });
  });
});
