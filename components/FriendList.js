const FriendList = function ({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li key={friend.id} class="item">
          <span class="status"></span>
          <img
            class="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p class="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
