let data={
    bankBalances: [
      { amount: '822370.71', state: 'ME' },
      { amount: '968817.53', state: 'WI' },
      { amount: '587603.26', state: 'OH' },
      { amount: '657617.83', state: 'FL' },
      { amount: '378192.36', state: 'DE' },
      { amount: '669546.11', state: 'AL' },
      { amount: '608626.44', state: 'OK' },
      { amount: '231272.04', state: 'UT' },
      { amount: '382748.79', state: 'OH' },
      { amount: '683737.17', state: 'AR' },
      { amount: '913216.09', state: 'PA' },
      { amount: '729204.39', state: 'IA' },
      { amount: '573816.42', state: 'VT' },
      { amount: '315166.45', state: 'GA' },
      { amount: '811418.42', state: 'AR' },
      { amount: '381043.13', state: 'WI' },
      { amount: '29610.00', state: 'GA' },
      { amount: '726904.66', state: 'TX' },
      { amount: '341364.05', state: 'MI' },
      { amount: '435105.78', state: 'IL' },
      { amount: '734090.27', state: 'UT' },
      { amount: '609216.58', state: 'VA' },
      { amount: '965891.90', state: 'PA' },
      { amount: '207074.79', state: 'MD' },
      { amount: '979009.78', state: 'LA' },
      { amount: '648470.73', state: 'WI' },
      { amount: '875720.82', state: 'IN' },
      { amount: '481642.65', state: 'CA' },
      { amount: '452227.67', state: 'WA' },
      { amount: '126198.26', state: 'VT' },
      { amount: '448019.33', state: 'UT' },
      { amount: '759570.28', state: 'WY' },
      { amount: '669394.12', state: 'TN' },
      { amount: '934418.07', state: 'VT' },
      { amount: '471073.38', state: 'MA' },
      { amount: '461330.63', state: 'MS' },
      { amount: '875684.36', state: 'OH' },
      { amount: '889649.10', state: 'ME' },
      { amount: '250918.19', state: 'TN' },
      { amount: '894487.65', state: 'FL' },
      { amount: '617075.68', state: 'AL' },
      { amount: '503473.28', state: 'VT' },
      { amount: '57880.44', state: 'NE' },
      { amount: '293464.54', state: 'MT' },
      { amount: '551208.99', state: 'IL' },
      { amount: '438527.25', state: 'AZ' },
      { amount: '442807.71', state: 'WY' },
      { amount: '859671.51', state: 'ME' },
      { amount: '692388.34', state: 'WI' },
      { amount: '667475.55', state: 'VT' },
      { amount: '325329.34', state: 'MN' },
      { amount: '907797.58', state: 'WY' },
      { amount: '737459.47', state: 'DE' },
      { amount: '670397.57', state: 'OK' },
      { amount: '516781.69', state: 'NE' },
      { amount: '650197.88', state: 'OH' },
      { amount: '765581.58', state: 'MO' },
      { amount: '713141.52', state: 'AL' },
      { amount: '44830.89', state: 'LA' },
      { amount: '212126.39', state: 'ME' },
      { amount: '7426.28', state: 'PA' },
      { amount: '839409.01', state: 'AL' },
      { amount: '115019.34', state: 'MI' },
      { amount: '65030.07', state: 'WA' },
      { amount: '618847.07', state: 'IL' },
      { amount: '944609.01', state: 'AZ' },
      { amount: '878072.21', state: 'GA' },
      { amount: '706919.12', state: 'AR' },
      { amount: '540560.47', state: 'WY' },
      { amount: '246311.95', state: 'MA' },
      { amount: '588847.38', state: 'FL' },
      { amount: '261729.11', state: 'KY' },
      { amount: '593282.64', state: 'LA' },
      { amount: '816974.09', state: 'WA' },
      { amount: '461729.71', state: 'DE' },
      { amount: '344141.38', state: 'CT' },
      { amount: '355164.16', state: 'KS' },
      { amount: '975500.37', state: 'KS' },
      { amount: '173539.83', state: 'AK' },
      { amount: '566473.23', state: 'MA' },
      { amount: '905763.57', state: 'TN' },
      { amount: '676161.17', state: 'MN' },
      { amount: '901770.40', state: 'HI' },
      { amount: '60734.29', state: 'UT' },
      { amount: '645333.35', state: 'IL' },
      { amount: '267949.46', state: 'WI' },
      { amount: '291868.97', state: 'CA' },
      { amount: '258525.05', state: 'ID' },
      { amount: '670378.49', state: 'AK' },
      { amount: '563501.70', state: 'FL' },
      { amount: '95546.27', state: 'IL' },
      { amount: '716276.28', state: 'CT' },
      { amount: '882101.62', state: 'NE' },
      { amount: '842577.56', state: 'VA' },
      { amount: '374506.19', state: 'MD' },
      { amount: '483084.94', state: 'NE' },
      { amount: '910596.45', state: 'IA' },
      { amount: '808045.11', state: 'TX' },
      { amount: '203122.41', state: 'ID' },
      { amount: '196085.92', state: 'MS' }
    ]
  }

  let sai=data.bankBalances

var sidhu=  sai.map(item => Math.round(item['amount']));
let i=0;
sai.map(item => { 
    item['amount']=sidhu[i++]
    return 1}
    );
console.log(sidhu.length)


sai.map(item => { 
    return Math.round(item['amount']
    )}
);
console.log(sai)

console.log(sai.every(account => {
  console.log(Object.hasOwnProperty.call(account, 'rounded'));
  return Object.hasOwnProperty.call(account, 'rounded');}))