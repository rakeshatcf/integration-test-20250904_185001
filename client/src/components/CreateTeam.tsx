import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
} from '@mui/material';
import { createTeam } from '../services/api';
import type { CreateTeamDto } from '@shared/types';

export default function CreateTeam() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CreateTeamDto>({
    name: '',
    description: '',
  });

  const mutation = useMutation({
    mutationFn: createTeam,
    onSuccess: () => {
      navigate('/');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <Box
      component={Paper}
      sx={{
        p: 4,
        mt: 4,
        maxWidth: 600,
        mx: 'auto',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Create New Team
      </Typography>

      {mutation.isError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Failed to create team. Please try again.
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Team Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          margin="normal"
          multiline
          rows={4}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          sx={{ mt: 2 }}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? 'Creating...' : 'Create Team'}
        </Button>
      </Box>
    </Box>
  );
}