export class Json {
  data: {
    type: string;
    attributes: {
      bfc: {};
      aml: {};
      best_rewards: {};
      payout_providers: {};
      asset_types: {};
      asset_groups: {};
      commodities: Array<Commodities>;
      cryptocoins: Array<Cryptocoins>;
      indexes: Array<Indexes>;
      fiats: Array<Fiats>;
      languages: {};
      newsletters: {};
      countries: {};
      profile_report_reasons: {};
      vip_levels_thresholds: {}
    }
  };
}

export class Cryptocoins {
  type: string;
  attributes: {
    symbol: string;
    name: string;
    avg_price: string;
    logo: string;
  };
  id: string;
}

export class Commodities {
  type: string;
  attributes: {
    symbol: string;
    name: string;
    avg_price: string;
    logo: string;
  };
  id: string;
}

export class Indexes {
  type: string;
  attributes: {
    symbol: string;
    name: string;
    avg_price: string;
    logo: string;
  };
  id: string;
}

export class Fiats {
  type: string;
  attributes: {
    symbol: string;
    name: string;
    default_sell_amount: string,
    has_wallets: boolean,
    logo: string;
  };
  id: string;
}


