import { createFileRoute } from '@tanstack/react-router';
import Greeting from '../pages/hello';

export const Route = createFileRoute('/greeting')({
  component: Greeting,
});
