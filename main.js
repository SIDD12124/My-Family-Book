var images = ["img1.jpg","father.jpg", "grand-father.png" , "bro.jpg", "sister.jpg", "mother.jpg"];
            var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Sonia Singh"];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 5
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
                family_members_image.style.width="250px";
                family_members_image.style.height="250px";
            }