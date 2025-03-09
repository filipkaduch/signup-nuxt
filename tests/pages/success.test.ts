import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import SuccessCard from '~/components/SuccessCard.vue';
import SuccessPage from '~/pages/success.vue';

describe('Success page', () => {
  describe('Visibility', () => {
    test('SuccessCard', () => {
      const component = mount(SuccessPage);

      expect(component.findComponent(SuccessCard).isVisible()).toBeTruthy();
    });
  });
});