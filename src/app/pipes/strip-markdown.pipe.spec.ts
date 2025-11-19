import { StripMarkdownPipe } from './strip-markdown.pipe';

describe('StripMarkdownPipe', () => {
  const pipe = new StripMarkdownPipe();

  it('transforms `undefined` and string values correctly', () => {
    expect(pipe.transform(undefined)).toBe('');
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform(' ')).toBe(' ');
    expect(pipe.transform('abc')).toBe('abc');

    expect(pipe.transform('|-')).toBe('-');
    expect(pipe.transform('|--')).toBe('');
    expect(pipe.transform('|---')).toBe('-');
    expect(pipe.transform('|--text|--')).toBe('text');

    expect(pipe.transform('&#39')).toBe('&#39');
    expect(pipe.transform('&#39;')).toBe("'");
    expect(pipe.transform('&#39;text&#39;')).toBe("'text'");

    expect(pipe.transform('&#39;text&#39; abc |--text|--')).toBe("'text' abc text");
  });

  it('removes special image syntax', () => {
    expect(pipe.transform('{{{https://example.com/image.jpg}}}')).toBe('');
    expect(pipe.transform('{{{image-id}}}')).toBe('');
    expect(pipe.transform('{{{https://example.com/image.jpg}}}(((300)))')).toBe('');
    expect(pipe.transform('{{{https://example.com/image.jpg}}}<<<caption>>>')).toBe('');
    expect(
      pipe.transform('{{{https://example.com/image.jpg}}}(((300)))<<<caption>>>'),
    ).toBe('');

    expect(
      pipe.transform(
        'text before {{{https://example.com/image.jpg}}}(((300)))<<<caption>>> text after',
      ),
    ).toBe('text before  text after');

    expect(
      pipe.transform('abc {{{url}}}(((300)))<<<caption with > character>>> def'),
    ).toBe('abc  def');

    expect(
      pipe.transform(
        'first {{{url1}}}(((100)))<<<caption1>>> middle {{{url2}}}<<<caption2>>> last',
      ),
    ).toBe('first  middle  last');
  });
});
