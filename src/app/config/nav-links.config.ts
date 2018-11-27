import { NavLink } from '../shared/models';

const navLinks: Array<NavLink> = [
    new NavLink('/contacts', 'Contacts', 'contacts'),
    new NavLink('/talks', 'Talks', 'chat'),
    new NavLink('/settings', 'Settings', 'settings'),
]

export function getNavlinks() {
    return navLinks;
}