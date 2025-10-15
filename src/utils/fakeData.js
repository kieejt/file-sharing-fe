// Dữ liệu giả để chạy FE độc lập không cần backend

export const fakeUser = {
  id: 'u_demo_1',
  name: 'Demo User',
  email: 'demo@sample.app',
  avatarUrl: 'https://i.pravatar.cc/100?img=3'
};

export const fakeFiles = [
  {
    id: 'f_001',
    name: 'Tailwind-CheatSheet.pdf',
    size: 1024 * 1024 * 2,
    mimeType: 'application/pdf',
    isPublic: true,
    ownerId: fakeUser.id,
    createdAt: '2025-01-01T10:00:00Z',
    updatedAt: '2025-01-01T10:00:00Z',
    downloadUrl: '#',
    shareId: 'share_abc123'
  },
  {
    id: 'f_002',
    name: 'Holiday-Photo.jpg',
    size: 1024 * 600,
    mimeType: 'image/jpeg',
    isPublic: false,
    ownerId: fakeUser.id,
    createdAt: '2025-02-10T08:30:00Z',
    updatedAt: '2025-02-10T08:30:00Z',
    downloadUrl: '#',
    shareId: 'share_def456'
  },
  {
    id: 'f_003',
    name: 'Report-Q1.docx',
    size: 1024 * 300,
    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    isPublic: true,
    ownerId: fakeUser.id,
    createdAt: '2025-03-05T14:15:00Z',
    updatedAt: '2025-03-05T14:15:00Z',
    downloadUrl: '#',
    shareId: 'share_ghi789'
  }
];

export function findFileById(fileId) {
  return fakeFiles.find((f) => f.id === fileId);
}

export function findFileByShareId(shareId) {
  return fakeFiles.find((f) => f.shareId === shareId);
}


