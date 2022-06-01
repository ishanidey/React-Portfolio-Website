import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'l84jg8n6',
  dataset: 'production',
  apiVersion: '2022-05-22',
  useCdn: true,
  token: 'skQ5jyq6thRw43IUs8XGDq7MC3vjU2k53ZbuqWwyPwjB9UAmri4jKGqdtqyIazTF7LCQMiO8Esh7QJKySgIHysbNZ3IMJeRPPZMvX0RinAd1XhZxA1qFMIzew6DsAkPnz1kONYYvOQFzDgaE2ULpjMRPVyTQu1tobPfM7nBNLRCIFyMIpYdr',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
