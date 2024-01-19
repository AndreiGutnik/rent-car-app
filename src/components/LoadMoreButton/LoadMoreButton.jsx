import { Button } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ isLoading, onClick }) => {
  return (
    <Button type="button" disabled={isLoading} onClick={onClick}>
      Load more
    </Button>
  );
};
