<template>
  <provet-card>
    <header :id="`${id}-title`" slot="header">{{ $t('signup.form.title') }}</header>

    <form
      :id="`${id}-form`"
      class="n-stack n-gap-m"
      @submit.prevent="signup"
    >
      <provet-input
        :id="`${id}-email_input`"
        :type="FieldTypes.EMAIL"
        :label="$t('signup.form.email.label')"
        :placeholder="$t('signup.form.email.placeholder')"
        :error="emailError"
        :form="id"
        expand
        required
        @change="(event: string) => emailField = event.target.value"
      />

      <provet-input
        :id="`${id}-password_input`"
        :type="showPassword ? FieldTypes.TEXT : FieldTypes.PASSWORD"
        :label="$t('signup.form.password.label')"
        :hint="$t('signup.form.password.hint')"
        :error="passwordError"
        :form="id"
        expand
        required
        @change="(event: string) => passwordField = event.target.value"
      >
        <provet-button
          :id="`${id}-password_vision`"
          slot="end"
          @click.prevent="showPassword = !showPassword"
        >
          {{ buttonLabel }}
        </provet-button>
      </provet-input>

      <provet-checkbox
        :id="`${id}-consent_checkbox`"
        :label="$t('signup.form.checkbox.label')"
        :checked="newsConsent"
        @change="newsConsent = !newsConsent"
      />

      <provet-button
        :id="`${id}-submit_button`"
        variant="primary"
        type="submit"
        expand
      >
        {{ $t('signup.form.button') }}
      </provet-button>
    </form>
  </provet-card>
</template>

<script setup lang="ts">
import useSignupFormStore from '~/stores/SignupFormStore';
import { FieldTypes } from '~/types/signup';

defineProps({
  id: {
    type: String as PropType<string>,
    required: true,
  },
});

const { t } = useI18n();

const { push } = useRouter();

const signupFormStore = useSignupFormStore();

const { errors, newsConsent } = storeToRefs(signupFormStore);

const { validateFields } = signupFormStore;

const showPassword = ref<boolean>(false);

const emailField = ref<string>('');

const passwordField = ref<string>('');

const emailError = computed<string | undefined>(() => errors.value.email ? t(`signup.form.email.validation.${errors.value.email}`) : undefined);

const passwordError = computed<string | undefined>(() => errors.value.password ? t(`signup.form.password.validation.${errors.value.password}`) : undefined);

const buttonLabel = computed<string>(() => t(`signup.form.password.${showPassword.value ? 'hide' : 'show'}`));

const signup = async () => {
  const errs = validateFields(emailField.value, passwordField.value);

  if (!errs) {
    const { signupCall } = useAuthentication();

    try {
      const response = await signupCall({
        email: emailField.value,
        password: passwordField.value,
        consent: newsConsent.value,
      });
      
      if (response.success) {
        useCookie('session').value = response.user;

        push('/success');
      }
    } catch (error) {
      console.error(error);
    }
  }
};
</script>
