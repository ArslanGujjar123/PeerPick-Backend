export const messagesData = [
  {
    needID: "6810e1ef748bcc07b725c92a",
    sender: { username: "john_doe" },
    receiver: { username: "jane_doe" },
    content: "Hello, how are you?",
    timestamp: "2025-04-29T12:00:00.000Z",
    read: false,
  },
  {
    needID: "6810e1ef748bcc07b725c92a",
    sender: { username: "jane_doe" },
    receiver: { username: "john_doe" },
    content: "I'm good, thanks! What about you?",
    timestamp: "2025-04-29T12:05:00.000Z",
    read: true,
  },
  {
    needID: "6810e1ef748bcc07b725c92b",
    sender: { username: "admin_user" },
    receiver: { username: "random_user1" },
    content: "Please check the new updates.",
    timestamp: "2025-04-29T13:00:00.000Z",
    read: false,
  },
  {
    needID: "6810e1ef748bcc07b725c92b",
    sender: { username: "random_user1" },
    receiver: { username: "admin_user" },
    content: "Got it. I'll review soon.",
    timestamp: "2025-04-29T13:10:00.000Z",
    read: true,
  },
  {
    needID: "6810e1ef748bcc07b725c92e",
    sender: { username: "random_user2" },
    receiver: { username: "active_user1" },
    content: "Are we ready for the presentation?",
    timestamp: "2025-04-29T14:00:00.000Z",
    read: false,
  },
  {
    needID: "6810e1ef748bcc07b725c92e",
    sender: { username: "active_user1" },
    receiver: { username: "random_user2" },
    content: "Yes, everything is set.",
    timestamp: "2025-04-29T14:05:00.000Z",
    read: false,
  },
  {
    needID: "6810e1ef748bcc07b725c939",
    sender: { username: "unique_admin1" },
    receiver: { username: "blocked_user1" },
    content: "Can you fix the access issue?",
    timestamp: "2025-04-27T16:00:00.000Z",
    read: false,
  },
  {
    needID: "6810e1ef748bcc07b725c939",
    sender: { username: "blocked_user1" },
    receiver: { username: "unique_admin1" },
    content: "Sure, I'll take a look.",
    timestamp: "2025-04-27T16:05:00.000Z",
    read: true,
  },
  {
    needID: "6810e1ef748bcc07b725c933",
    sender: { username: "test_admin" },
    receiver: { username: "unique_admin1" },
    content: "Let's finalize the team schedule.",
    timestamp: "2025-04-29T16:00:00.000Z",
    read: false,
  },
  {
    needID: "6810e1ef748bcc07b725c933",
    sender: { username: "unique_admin1" },
    receiver: { username: "test_admin" },
    content: "All set. Sending it over.",
    timestamp: "2025-04-29T16:05:00.000Z",
    read: true,
  },
  {
    needID: "6810e1ef748bcc07b725c936",
    sender: { username: "john_doe" },
    receiver: { username: "random_user2" },
    content: "Can you join the meeting at 4 PM?",
    timestamp: "2025-04-28T12:00:00.000Z",
    read: false,
  },
  {
    needID: "6810e1ef748bcc07b725c936",
    sender: { username: "random_user2" },
    receiver: { username: "john_doe" },
    content: "Yes, I'll be there.",
    timestamp: "2025-04-28T12:05:00.000Z",
    read: false,
  },
];




export const usersData = [
  {
    username: "john_doe",
    email: "john.doe@example.com",
    password: "hashed_password_123",
    socketId: null,
    isBlocked: false,
    role: "user",
    createdAt: "2025-04-29T12:00:00.000Z"
  },
  {
    username: "jane_doe",
    email: "jane.doe@example.com",
    password: "hashed_password_456",
    socketId: "socket_456",
    isBlocked: false,
    role: "admin",
    createdAt: "2025-04-28T12:00:00.000Z"
  },
  {
    username: "admin_user",
    email: "admin@example.com",
    password: "hashed_password_admin",
    socketId: "socket_789",
    isBlocked: false,
    role: "admin",
    createdAt: "2025-04-27T12:00:00.000Z"
  },
  {
    username: "random_user1",
    email: "random1@example.com",
    password: "hashed_random1",
    socketId: null,
    isBlocked: true,
    role: "user",
    createdAt: "2025-04-26T12:00:00.000Z"
  },
  {
    username: "random_user2",
    email: "random2@example.com",
    password: "hashed_random2",
    socketId: "socket_123",
    isBlocked: false,
    role: "user",
    createdAt: "2025-04-25T12:00:00.000Z"
  },
  {
    username: "unique_admin1",
    email: "admin1@example.com",
    password: "hashed_admin1",
    socketId: "socket_234",
    isBlocked: false,
    role: "admin",
    createdAt: "2025-04-24T12:00:00.000Z"
  },
  {
    username: "active_user1",
    email: "active1@example.com",
    password: "hashed_active1",
    socketId: "socket_345",
    isBlocked: false,
    role: "user",
    createdAt: "2025-04-23T12:00:00.000Z"
  },
  {
    username: "blocked_user1",
    email: "blocked1@example.com",
    password: "hashed_blocked1",
    socketId: null,
    isBlocked: true,
    role: "user",
    createdAt: "2025-04-22T12:00:00.000Z"
  },
  {
    username: "guest_user",
    email: "guest@example.com",
    password: "hashed_guest",
    socketId: null,
    isBlocked: false,
    role: "user",
    createdAt: "2025-04-21T12:00:00.000Z"
  },
  {
    username: "test_admin",
    email: "test_admin@example.com",
    password: "hashed_test_admin",
    socketId: "socket_111",
    isBlocked: false,
    role: "admin",
    createdAt: "2025-04-20T12:00:00.000Z"
  }
]


export const needsData = [
  {
    user: { username: "john_doe" },
    title: "Build React Dashboard",
    description: "Need help building a modern dashboard using React and Redux.",
    category: "Project",
    status: "open",
    assignedTo: null,
    createdAt: "2025-04-29T12:00:00.000Z",
    imageUrls: ["https://via.placeholder.com/150"]
  },
  {
    user: { username: "jane_doe" },
    title: "Physics Notes Summary",
    description: "Request for summarized physics notes for chapters 3 and 4.",
    category: "Notes",
    status: "assigned",
    assignedTo: { username: "random_user1" },
    createdAt: "2025-04-29T13:00:00.000Z",
    imageUrls: ["https://via.placeholder.com/200"]
  },
  {
    user: { username: "admin_user" },
    title: "Python Machine Learning Assignment",
    description: "Assignment involving Scikit-learn classification techniques.",
    category: "Assignment",
    status: "closed",
    assignedTo: { username: "active_user1" },
    createdAt: "2025-04-29T14:00:00.000Z",
    imageUrls: ["https://via.placeholder.com/250"]
  },
  {
    user: { username: "random_user1" },
    title: "Review Study Plan",
    description: "Need feedback on my 3-month study plan for SAT.",
    category: "Study",
    status: "open",
    assignedTo: null,
    createdAt: "2025-04-28T12:00:00.000Z",
    imageUrls: ["https://picsum.photos/200"]
  },
  {
    user: { username: "random_user2" },
    title: "Data Structures Project",
    description: "Group project involving tree traversal algorithms.",
    category: "Project",
    status: "assigned",
    assignedTo: { username: "admin_user" },
    createdAt: "2025-04-28T13:00:00.000Z",
    imageUrls: ["https://via.placeholder.com/300"]
  },
  {
    user: { username: "unique_admin1" },
    title: "Programming Notes Compilation",
    description: "Compile notes on JavaScript and Python programming.",
    category: "Notes",
    status: "open",
    assignedTo: null,
    createdAt: "2025-04-27T14:00:00.000Z",
    imageUrls: ["https://picsum.photos/300"]
  },
  {
    user: { username: "active_user1" },
    title: "Analysis Report",
    description: "Request help analyzing business data trends.",
    category: "Assignment",
    status: "closed",
    assignedTo: { username: "test_admin" },
    createdAt: "2025-04-27T15:00:00.000Z",
    imageUrls: ["https://via.placeholder.com/400"]
  },
  {
    user: { username: "blocked_user1" },
    title: "Mathematics Assignment",
    description: "Solve complex integrals for calculus exam preparation.",
    category: "Study",
    status: "assigned",
    assignedTo: { username: "jane_doe" },
    createdAt: "2025-04-26T12:00:00.000Z",
    imageUrls: ["https://picsum.photos/500"]
  },
  {
    user: { username: "guest_user" },
    title: "3D Modeling Project",
    description: "Develop detailed 3D models of buildings for architecture class.",
    category: "Project",
    status: "open",
    assignedTo: null,
    createdAt: "2025-04-25T11:00:00.000Z",
    imageUrls: ["https://via.placeholder.com/600"]
  },
  {
    user: { username: "test_admin" },
    title: "Review Marketing Strategy",
    description: "Need feedback on a marketing proposal for the quarter.",
    category: "Assignment",
    status: "assigned",
    assignedTo: { username: "blocked_user1" },
    createdAt: "2025-04-24T10:00:00.000Z",
    imageUrls: ["https://via.placeholder.com/700"]
  },
  {
    user: { username: "john_doe" },
    title: "Chemistry Notes Review",
    description: "Create detailed summary notes for organic chemistry.",
    category: "Notes",
    status: "open",
    assignedTo: null,
    createdAt: "2025-04-23T12:00:00.000Z",
    imageUrls: ["https://picsum.photos/800"]
  },
  {
    user: { username: "jane_doe" },
    title: "Mobile App Prototype",
    description: "Develop a wireframe prototype for my mobile app idea.",
    category: "Project",
    status: "closed",
    assignedTo: { username: "unique_admin1" },
    createdAt: "2025-04-22T13:00:00.000Z",
    imageUrls: ["https://via.placeholder.com/900"]
  },
  {
    user: { username: "admin_user" },
    title: "Economics Study Guide",
    description: "Create study notes for chapters 10-15.",
    category: "Study",
    status: "open",
    assignedTo: null,
    createdAt: "2025-04-21T14:00:00.000Z",
    imageUrls: ["https://picsum.photos/450"]
  },
  {
    user: { username: "random_user1" },
    title: "Robotics Project Assistance",
    description: "Help with robotics project focusing on AI algorithms.",
    category: "Project",
    status: "assigned",
    assignedTo: { username: "active_user1" },
    createdAt: "2025-04-20T15:00:00.000Z",
    imageUrls: ["https://via.placeholder.com/150"]
  },
  {
    user: { username: "random_user2" },
    title: "Business Assignment Review",
    description: "Need detailed feedback on my assignment draft.",
    category: "Assignment",
    status: "closed",
    assignedTo: { username: "guest_user" },
    createdAt: "2025-04-19T12:00:00.000Z",
    imageUrls: ["https://via.placeholder.com/250"]
  },
  {
    user: { username: "unique_admin1" },
    title: "History Notes Compilation",
    description: "Create study notes for medieval history topics.",
    category: "Notes",
    status: "assigned",
    assignedTo: { username: "blocked_user1" },
    createdAt: "2025-04-18T13:00:00.000Z",
    imageUrls: ["https://picsum.photos/300"]
  },
  {
    user: { username: "active_user1" },
    title: "AI Research Paper Review",
    description: "Review my research paper draft for AI trends.",
    category: "Study",
    status: "open",
    assignedTo: null,
    createdAt: "2025-04-17T14:00:00.000Z",
    imageUrls: ["https://via.placeholder.com/600"]
  },
  {
    user: { username: "blocked_user1" },
    title: "Create Artwork Assignment",
    description: "Develop creative artwork for visual arts class.",
    category: "other",
    status: "closed",
    assignedTo: { username: "random_user1" },
    createdAt: "2025-04-16T15:00:00.000Z",
    imageUrls: ["https://picsum.photos/700"]
  },
  {
    user: { username: "guest_user" },
    title: "Code Review for Project",
    description: "Request assistance reviewing my JavaScript code.",
    category: "Project",
    status: "assigned",
    assignedTo: { username: "test_admin" },
    createdAt: "2025-04-15T16:00:00.000Z",
    imageUrls: ["https://via.placeholder.com/800"]
  },
  {
    user: { username: "test_admin" },
    title: "Update Financial Notes",
    description: "Create a guide for financial topics and theories.",
    category: "Notes",
    status: "open",
    assignedTo: null,
    createdAt: "2025-04-14T12:00:00.000Z",
    imageUrls: ["https://via.placeholder.com/900"]
  }
]



export const reportsData = [
  {
    reporter: { username: "john_doe" },
    reportedUser: { username: "random_user1" },
    description: "User posted inappropriate content in the group chat.",
    imageUrl: "https://via.placeholder.com/150",
    category: "inappropriate-content",
    status: "under-review",
    createdAt: "2025-04-29T12:00:00.000Z"
  },
  {
    reporter: { username: "jane_doe" },
    reportedUser: { username: "guest_user" },
    description: "Suspected of sending spam messages repeatedly.",
    imageUrl: "https://picsum.photos/200",
    category: "spam",
    status: "pending",
    createdAt: "2025-04-29T13:00:00.000Z"
  },
  {
    reporter: { username: "admin_user" },
    reportedUser: { username: "blocked_user1" },
    description: "Fake profile suspected. No valid identity details provided.",
    imageUrl: "https://via.placeholder.com/250",
    category: "fake-profile",
    status: "resolved",
    createdAt: "2025-04-29T14:00:00.000Z"
  },
  {
    reporter: { username: "random_user1" },
    reportedUser: { username: "active_user1" },
    description: "Scammed users through phishing links in messages.",
    imageUrl: "https://picsum.photos/300",
    category: "scam",
    status: "dismissed",
    createdAt: "2025-04-28T12:00:00.000Z"
  },
  {
    reporter: { username: "random_user2" },
    reportedUser: { username: null },
    description: "Received threatening messages anonymously.",
    imageUrl: "https://via.placeholder.com/400",
    category: "harassment",
    status: "under-review",
    createdAt: "2025-04-28T13:00:00.000Z"
  },
  {
    reporter: { username: "unique_admin1" },
    reportedUser: { username: "guest_user" },
    description: "Spam messages targeting multiple users in the group.",
    imageUrl: "https://picsum.photos/450",
    category: "spam",
    status: "pending",
    createdAt: "2025-04-27T14:00:00.000Z"
  },
  {
    reporter: { username: "active_user1" },
    reportedUser: { username: "random_user2" },
    description: "Shared offensive images in private conversations.",
    imageUrl: "https://via.placeholder.com/500",
    category: "inappropriate-content",
    status: "resolved",
    createdAt: "2025-04-27T15:00:00.000Z"
  },
  {
    reporter: { username: "blocked_user1" },
    reportedUser: { username: null },
    description: "Unknown individual impersonating known users.",
    imageUrl: "https://picsum.photos/600",
    category: "fake-profile",
    status: "under-review",
    createdAt: "2025-04-26T12:00:00.000Z"
  },
  {
    reporter: { username: "guest_user" },
    reportedUser: { username: "test_admin" },
    description: "Suspected of manipulating data in shared documents.",
    imageUrl: "https://via.placeholder.com/700",
    category: "scam",
    status: "pending",
    createdAt: "2025-04-25T11:00:00.000Z"
  },
  {
    reporter: { username: "test_admin" },
    reportedUser: { username: null },
    description: "Content shared violates community guidelines.",
    imageUrl: "https://picsum.photos/800",
    category: "harassment",
    status: "dismissed",
    createdAt: "2025-04-24T10:00:00.000Z"
  }
]
