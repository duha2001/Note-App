export default {
  authors: [
    {
      id: "123",
      name: "aaa",
    },
    {
      id: "999",
      name: "bbb",
    },
  ],
  folders: [
    {
      id: "1",
      name: "Home",
      createdAt: "2022-11-18T03:42:13Z",
      authorId: 123,
    },
    {
      id: "2",
      name: "Run",
      createdAt: "2022-11-18T03:42:13Z",
      authorId: 999,
    },
    {
      id: "3",
      name: "Work",
      createdAt: "2022-11-18T03:42:13Z",
      authorId: 123,
    },
  ],
  notes: [
    {
      id: "123",
      content: "<p>Làm việc nhà</p>",
      folderId: "1",
    },
    {
      id: "234",
      content: "<p>ádasdadsa</p>",
      folderId: "3",
    },
    {
      id: "567",
      content: "<p>aaaaa</p>",
      folderId: "1",
    },
    {
      id: "789",
      content: "<p>bbbbb</p>",
      folderId: "2",
    },
  ],
};
