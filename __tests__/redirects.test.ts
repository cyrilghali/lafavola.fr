import nextConfig from '../next.config';

describe('redirects', () => {
  it('contains menu pdf redirect', async () => {
    const redirects = await nextConfig.redirects();
    expect(redirects).toContainEqual({
      source: '/menu',
      destination: '/menu.pdf',
      permanent: true,
    });
  });
});
