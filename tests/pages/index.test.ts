import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import SignupForm from '~/components/SignupForm.vue';
import IndexPage from '~/pages/index.vue';

describe('Index page', () => {
  describe('Visibility', () => {
    test('SignupForm', () => {
      const component = mount(IndexPage);

      expect(component.findComponent(SignupForm).isVisible()).toBeTruthy();
    });
  });
});
