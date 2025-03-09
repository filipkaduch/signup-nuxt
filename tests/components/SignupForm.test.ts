import { mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import { beforeEach, describe, test, expect } from 'vitest';
import SignupForm from '~/components/SignupForm.vue';

const id = 'signup';

describe('SignupForm', () => {
  describe('Visibility', () => {
    let component: VueWrapper;

    beforeEach(() => {
      component = mount(SignupForm, {
        props: {
          id,
        },
      });
    });

    test('Title', () => {
      expect(component.find(`#${id}-title`).isVisible()).toBeTruthy();
    });

    test('Form', () => {
      expect(component.find(`#${id}-form`).isVisible()).toBeTruthy();
    });

    test('Email input', () => {
      expect(component.find(`#${id}-email_input`).isVisible()).toBeTruthy();
    });

    test('Password input', () => {
      expect(component.find(`#${id}-password_input`).isVisible()).toBeTruthy();
    });

    test('Consent checkbox', () => {
      expect(component.find(`#${id}-consent_checkbox`).isVisible()).toBeTruthy();
    });

    test('Submit button', () => {
      expect(component.find(`#${id}-submit_button`).isVisible()).toBeTruthy();
    });
  });
});
