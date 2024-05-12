import { HomeIcon, BriefcaseIcon, UserIcon, EnvelopeIcon, PencilIcon } from '@heroicons/vue/24/outline'
import { type FunctionalComponent } from 'vue'

type Where = 'home' | 'app';

export type Navigation = {
  name: string;
  to: string;
  icon: FunctionalComponent;
};

export function getNavigation(where: Where): Record<string, Navigation> | [] {
  switch (where) {
    case 'home':
      return {
        home: {
          name: 'Home',
          to: '/',
          icon: HomeIcon,
        },
        works: {
          name: 'Works',
          to: '/',
          icon: BriefcaseIcon,
        },
        writing: {
          name: 'Writing',
          to: '/',
          icon: PencilIcon,
        },
        about: {
          name: 'About',
          to: '/',
          icon: UserIcon,
        },
        contact: {
          name: 'Contact',
          to: '/',
          icon: EnvelopeIcon,
        },
      }
    default:
      return []
  }
}
