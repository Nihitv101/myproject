/* eslint-disable no-unused-vars */

const jsonData = [
    {
      name: 'Mixmax',
      budget_name: 'Software subscription',
      owner_id: 1,
      spent: {
        value: 60,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 100,
        currency: 'SGD',
      },
      card_type: 'burner',
      expiry: '9 Feb',
      limit: 100,
      status: 'active',
    },
    {
      name: 'Company A',
      budget_name: 'Marketing expenses',
      owner_id: 2,
      spent: {
        value: 700,
        currency: 'SGD',
      },
      available_to_spend: {
        value: 1400,
        currency: 'SGD',
      },
      card_type: 'subscription',
      expiry: '15 Mar',
      limit: 200,
      status: 'active',
    },
    {
      name: 'Company B',
      budget_name: 'IT services',
      owner_id: 3,
      spent: {
        value: 1500,
        currency: 'EUR',
      },
      available_to_spend: {
        value: 2000,
        currency: 'EUR',
      },
      card_type: 'burner',
      expiry: '5 Apr',
      limit: 150,
      status: 'active',
    },
    {
        name: 'OpenAI',
        budget_name: 'AI research',
        owner_id: 4,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 500,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 200,
        status: 'active',
      },

      {
        name: 'Amazon',
        budget_name: 'E commerce',
        owner_id: 5,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'burner',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'Linkedin',
        budget_name: 'E commerce',
        owner_id: 6,
        spent: {
          value: 1000,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1300,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'AWS Card',
        budget_name: 'E commerce',
        owner_id: 7,
        spent: {
          value: 700,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 900,
          currency: 'SGD',
        },
        card_type: 'burner',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'AWS Card',
        budget_name: 'E commerce',
        owner_id: 8,
        spent: {
          value: 400,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1300,
          currency: 'SGD',
        },
        card_type: 'burner',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'google Card',
        budget_name: 'E commerce',
        owner_id: 9,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'google Card',
        budget_name: 'E commerce',
        owner_id: 10,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'google Card',
        budget_name: 'E commerce',
        owner_id: 11,
        spent: {
          value: 600,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 900,
          currency: 'SGD',
        },
        card_type: 'burner',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'google Card',
        budget_name: 'E commerce',
        owner_id: 12,
        spent: {
          value: 400,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 700,
          currency: 'SGD',
        },
        card_type: 'burner',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'google Card',
        budget_name: 'E commerce',
        owner_id: 13,
        spent: {
          value: 600,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1000,
          currency: 'SGD',
        },
        card_type: 'burner',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'Black Card',
        budget_name: 'E commerce',
        owner_id: 14,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'Black Card',
        budget_name: 'E commerce',
        owner_id: 15,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'burner',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'Black Card',
        budget_name: 'E commerce',
        owner_id: 16,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'burner',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'Black Card',
        budget_name: 'E commerce',
        owner_id: 17,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'Black Card',
        budget_name: 'E commerce',
        owner_id: 18,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'burner',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'Black Card',
        budget_name: 'E commerce',
        owner_id: 19,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'Black Card',
        budget_name: 'E commerce',
        owner_id: 20,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'burner',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'Black Card',
        budget_name: 'E commerce',
        owner_id: 21,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'Black Card',
        budget_name: 'E commerce',
        owner_id: 22,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'AWS Card',
        budget_name: 'E commerce',
        owner_id: 23,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'AWS Card',
        budget_name: 'E commerce',
        owner_id: 24,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'AWS Card',
        budget_name: 'E commerce',
        owner_id: 25,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'AWS Card',
        budget_name: 'E commerce',
        owner_id: 26,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'AWS Card',
        budget_name: 'E commerce',
        owner_id: 27,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'AWS Card',
        budget_name: 'E commerce',
        owner_id: 28,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'AWS Card',
        budget_name: 'E commerce',
        owner_id: 29,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },
      {
        name: 'AWS Card',
        budget_name: 'E commerce',
        owner_id: 30,
        spent: {
          value: 200,
          currency: 'SGD',
        },
        available_to_spend: {
          value: 1500,
          currency: 'SGD',
        },
        card_type: 'subscription',
        expiry: '15 Mar',
        limit: 130,
        status: 'active',
      },

];

export default jsonData;
