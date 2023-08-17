import Portraits from '../assets/portraits/Portraits';
import { RouteStatus } from './enums';
import { FemaleExclusive, MaleExclusive } from './classes';

const Characters = {
  Byleth: {
    name: `Byleth`,
    portrait: ``,
    routeInfo: [RouteStatus.Byleth, RouteStatus.Byleth, RouteStatus.Byleth, RouteStatus.Byleth],
    endings: [`Claude`, `Edelgard`],
    classes: [`EnlightenedOne`, ...FemaleExclusive],
    boons: [`Brawl`, `Sword`, `Authority`],
    banes: [],
    buddingTalent: `Faith`
  },
  Claude: {
    name: `Claude`,
    portrait: Portraits.Claude,
    routeInfo: [RouteStatus.Default, RouteStatus.Unavailable, RouteStatus.Unavailable, RouteStatus.Unavailable],
    endings: [`Byleth`],
    classes: [`Lord`, `WyvernMaster`, `Barbarossa`, ...MaleExclusive],
    boons: [],
    banes: [],
    buddingTalent: `Axe`
  },
  Edelgard: {
    name: `Edelgard`,
    portrait: ``,
    routeInfo: [RouteStatus.Unavailable, RouteStatus.Unavailable, RouteStatus.Default, RouteStatus.Unavailable],
    endings: [`Byleth`],
    classes: [`Lord`, `ArmoredLord`, `Emperor`, ...FemaleExclusive],
    boons: [],
    banes: [],
    buddingTalent: `Reason`
  }
}

module.exports = {
  Characters
}
