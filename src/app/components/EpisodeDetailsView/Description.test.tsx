import {render} from '@testing-library/react';
import Description from './Description';

describe('Description component', () => {
  const description =
    'This is a test description with a URL \n www.google.com in it.\n This is another paragraph.';

  it('should render paragraphs and URLs correctly', () => {
    const wrapper = render(<Description description={description} />);

    expect(wrapper.getByText('This is a test description with a URL')).toBeInTheDocument();
    expect(wrapper.getByText('www.google.com')).toHaveAttribute('href', 'http://www.google.com');
    expect(wrapper.getByText('This is another paragraph.')).toBeInTheDocument();
  });
});
