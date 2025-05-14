import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button/Button';

export const ExampleButton = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {/* variant */}
      <Button variant="primary" size="md" onClick={() => alert('Primary button clicked!')}>
        Click Me
      </Button>
      <Button variant="secondary" size="md" onClick={() => alert('Secondary button clicked!')}>
        Click Me
      </Button>
      <Button variant="destructive" size="md" onClick={() => alert('Destructive button clicked!')}>
        Click Me
      </Button>
      <Button variant="ghost" size="md" onClick={() => alert('Ghost button clicked!')}>
        Click Me
      </Button>

      {/* disabled */}
      <Button variant="primary" size="md" disabled>
        Click Me
      </Button>

      {/* loading */}
      <Button variant="primary" size="md" loading>
        Click Me
      </Button>

      {/* asChild */}
      <Button asChild>
        <Link to="/">메인으로 이동</Link>
      </Button>
    </div>
  );
};
